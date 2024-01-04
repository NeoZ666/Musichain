// import React, { useState } from "react";
// import toast from 'react-hot-toast'

// const AppForm = ({ onSubmit }) => {
//   const [formData, setFormData] = useState({
//     licensor: "",
//     licensee: "",
//     fee: "",
//     expiryDate: "",
//     musicalWork: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevData) => ({ ...prevData, [name]: value }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit(formData);

//     toast.success('Transaction successful');
//   };

//   return (
//     <div className="flex items-center justify-center bg-gray-900">
//       <div className="bg-opacity-25 bg-blur w-96 p-8 rounded-md shadow-md">
//         <form onSubmit={handleSubmit}>
//           <label className="block text-sm font-medium text-white">
//             Licensor:
//             <input
//               className="text-black mt-1 p-2 w-full border rounded-md"
//               type="text"
//               name="licensor"
//               value={formData.licensor}
//               onChange={handleChange}
//             />
//           </label>
//           <br />
//           <label className="block text-sm font-medium text-white">
//             Licensee:
//             <input
//               className="text-black mt-1 p-2 w-full border rounded-md"
//               type="text"
//               name="licensee"
//               value={formData.licensee}
//               onChange={handleChange}
//             />
//           </label>
//           <br />
//           <label className="block text-sm font-medium text-white">
//             Fee (ETH):
//             <input
//               className="text-black mt-1 p-2 w-full border rounded-md"
//               type="text"
//               name="fee"
//               value={formData.fee}
//               onChange={handleChange}
//             />
//           </label>
//           <br />
//           <label className="block text-sm font-medium text-white">
//             Expiry Date:
//             <input
//               className="text-black mt-1 p-2 w-full border rounded-md"
//               type="text"
//               name="expiryDate"
//               value={formData.expiryDate}
//               onChange={handleChange}
//             />
//           </label>
//           <br />
//           <label className="block text-sm font-medium text-white">
//             Musical Work:
//             <input
//               className="text-black mt-1 p-2 w-full border rounded-md"
//               type="text"
//               name="musicalWork"
//               value={formData.musicalWork}
//               onChange={handleChange}
//             />
//           </label>
//           <br />
//           <button
//             type="submit"
//             className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 bg-lavender"
//           >
//             Submit
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AppForm;

import React, { useState, useEffect } from "react";
import Web3 from "web3";
// import Lock from "../../../../hardhat_musichain/src/artifacts/contracts/Locksol/Lock.json";
import Lock from "./Lock.json";

const LockAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

function AppForm() {
  const [amount, setAmount] = useState(30);
  const [licensor, setLicensor] = useState("");
  const [account, setAccount] = useState("");
  const [days, setDays] = useState(1);

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
    <div className="App">
      <div className="App-header">
        <h1>Lock Contract</h1>
        <h3>Interact with the Lock contract</h3>
        <div className="custom-buttons">
          <button onClick={sendPayment} style={{ backgroundColor: "green" }}>
            Send Payment
          </button>
          <button onClick={updateLicensor} style={{ backgroundColor: "red" }}>
            Update Licensor
          </button>
          <button onClick={emitEvent} style={{ backgroundColor: "blue" }}>
            Emit Event
          </button>
        </div>

      <div>
        Total Payable Amount: {amount} ETH
      </div>
      <div className="custom-input">
        Enter Number of Days:
        <input
          type="text"
          onChange={(e) => setDays(e.target.value)}
          placeholder="Enter Number of Days"
        /></div>
        <input
          onChange={(e) => setLicensor(e.target.value)}
          value={licensor}
          placeholder="Enter new licensor address"
        />
      </div>
    </div>
  );
}

export default AppForm;
