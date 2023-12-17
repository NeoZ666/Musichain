import React, { useState } from "react";
import Web3 from "web3";
import MusicLicensingContract from "./MusicLicensingContract.json";
import AppForm from "./AppForm";

const App = () => {
  const [web3, setWeb3] = useState(null);
  const [contract, setContract] = useState(null);
  const [account, setAccount] = useState(null);

  const initWeb3 = async () => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      setWeb3(web3);

      try {
        await window.ethereum.enable();
        const accounts = await web3.eth.getAccounts();
        setAccount(accounts[0]);

        const networkId = await web3.eth.net.getId();
        const contractInstance = new web3.eth.Contract(
          MusicLicensingContract.abi,
          "0xB1BDDD23843fc5832F060842a54d6AbD86EE09D2"
        );
        setContract(contractInstance);
      } catch (error) {
        console.error("Error initializing web3", error);
      }
    } else {
      console.error("Please install MetaMask to use this application");
    }
  };

  const handleFormSubmit = async (formData) => {
    try {
      // Check if MetaMask is connected
      if (!contract || !web3 || !account) {
        console.error("Contract or web3 or account not initialized");
        return;
      }

      // Convert fee to wei
      const feeInEther = formData.fee;
      const feeInWei = web3.utils.toWei(feeInEther.toString(), "ether");

      // Estimate gas
      const gas = await contract.methods
        .completeLicenseTransaction()
        .estimateGas({
          from: account,
          value: feeInWei,
        });

      // Send transaction
      const result = await contract.methods.completeLicenseTransaction().send({
        from: account,
        value: feeInWei,
        gas,
      });

      console.log("Transaction result:", result);
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    // <div>
    //   <h1>Music Licensing App</h1>
    //   <div>
    //     <p>Connected Account: {account}</p>
    //     <AppForm onSubmit={handleFormSubmit} />
    //   </div>
    //   <p>Loading Web3...</p>
    // </div>

    <div>
      <h1>Music Licensing App</h1>
      <div>
        <p>Connected Account: {account}</p>
        <button onClick={initWeb3}>Connect MetaMask</button>
        <AppForm onSubmit={handleFormSubmit} />
      </div>
      <p>Loading Web3...</p>
    </div>
  );
};

export default App;
