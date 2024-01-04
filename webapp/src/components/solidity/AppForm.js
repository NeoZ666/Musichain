import React, { useState, useEffect } from "react";
import Web3 from "web3";
// import Lock from "../../../../hardhat_musichain/src/artifacts/contracts/Locksol/Lock.json";
import Lock from "./Lock.json";

const LockAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function AppForm() {
  const [amount, setAmount] = useState(30);
  const [licensor, setLicensor] = useState("");
  const [account, setAccount] = useState("");
  const [days, setDays] = useState(30);

  const requestAccount = async () => {
    if (typeof window !== "undefined" && typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
        console.log(accounts[0]);
      } catch (err) {
        console.error(err);
      }
    }
  };

  async function sendPayment() {
    if (!amount) return;

    if (window.ethereum) {
      await requestAccount();

      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      const contract = new web3.eth.Contract(Lock.abi, LockAddress);

      try {
        await contract.methods.receivePayment().send({
          value: web3.utils.toWei(amount, "ether"),
          from: accounts[0],
        });
        setAmount("");
        console.log("Payment Sent Successfully");
      } catch (error) {
        console.error("Error sending payment:", error);
      }
    }
  }

  async function updateLicensor() {
    if (!licensor) return;

    if (window.ethereum) {
      await requestAccount();

      const web3 = new Web3(window.ethereum);
      const accounts = await web3.eth.getAccounts();
      const contract = new web3.eth.Contract(Lock.abi, LockAddress);

      try {
        const transaction = await contract.methods
          .updateLicensor(licensor)
          .send({ from: accounts[0] });

        setLicensor("");
        console.log("Transaction Hash:", transaction.transactionHash);
      } catch (error) {
        console.error("Error updating licensor:", error);
      }
    }
  }

  async function emitEvent() {
    if (window.ethereum) {
        await requestAccount();

        const web3 = new Web3(window.ethereum);
        const accounts = await web3.eth.getAccounts();
        const contract = new web3.eth.Contract(Lock.abi, LockAddress);

        try {
            await contract.methods.emitMusicDetails(days, amount, "My Song").send({ from: accounts[0] });
            console.log("Event emitted successfully");
        } catch (error) {
            console.error("Error emitting event:", error);
        }
    }
  }
  useEffect(() => {
    requestAccount();
  }, []);

  useEffect(() => {
    setAmount(30 * days);
  }, [days]);

  return (
    <div className="App break-inside-avoid rounded-lg border border-gray-300 bg-slate-800 bg-clip-padding p-6 pb-4 backdrop-blur-lg backdrop-filter h-fit">
      <div className="App-header ">
        

      <div className="text-lg mb-4">
        Total Payable Amount: {amount} ETH
      </div>
      <div className="custom-input my-4">
        Enter Number of Days : 
        <input
          className="p-2 rounded-lg text-center text-black ml-4 w-[50px]"
          type="text"
          value={days}
          onChange={(e) => setDays(e.target.value)}
          placeholder="Enter Number of Days"
        /></div>
        <input
          className="hidden"
          onChange={(e) => setLicensor(e.target.value)}
          value={licensor}
          placeholder="Enter new licensor address"
        />
      </div>

      <div className="custom-buttons my-2">
          <button className="py-2 px-4 rounded-lg mr-2" onClick={sendPayment} style={{ backgroundColor: "rgba(215, 1, 255, 0.28)", border: "2px solid rgba(215, 1, 255, 0.76)" }}>
            Send Payment
          </button>
          <button className="hidden" onClick={updateLicensor} style={{ backgroundColor: "red" }}>
            Update Licensor
          </button>
          <button className="py-2 px-4 rounded-lg" onClick={emitEvent} style={{ backgroundColor: "rgba(34, 1, 255, 0.28)", border: "2px solid rgba(34, 1, 255, 0.76)" }}>
            Emit Event
          </button>
        </div>
    </div>
  );
}

export default AppForm;
