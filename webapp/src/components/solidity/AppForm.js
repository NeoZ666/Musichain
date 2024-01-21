import React, { useState, useEffect } from "react";
import Web3 from "web3";
// import Lock from "../../../../hardhat_musichain/src/artifacts/contracts/Locksol/Lock.json";
import Lock from "./Lock.json";
import toast from "react-hot-toast";

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
        toast.success("Payment Sent Successfully");
      } catch (error) {
        console.error("Error sending payment:", error);
        toast.error("Error sending payment");
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
            toast.success("Event emitted successfully");
        } catch (error) {
            console.error("Error emitting event:", error);
            toast.error("Error emitting event");
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
          <button className="py-2 px-4 rounded-lg" onClick={emitEvent} style={{ backgroundColor: "rgba(34, 1, 255, 0.28)", border: "2px solid rgba(34, 1, 255, 0.76)" }}>
            Emit Event
          </button>
        </div>
    </div>
  );
}

export default AppForm;



// import React, { useState, useEffect } from "react";
// import Web3 from "web3";
// import neo4j from "neo4j-driver";

// // ... (other code)

// const AppForm = () => {
//   // ... (existing state and functions)

//   async function handleSubmit(e) {
//     e.preventDefault();

//     // ... (existing code)

//     // Neo4j connection details
//     const uri = "neo4j+s://YOUR_NEO4J_URI"; // Replace with your Neo4j URI
//     const user = "YOUR_NEO4J_USERNAME"; // Replace with your Neo4j username
//     const password = "YOUR_NEO4J_PASSWORD"; // Replace with your Neo4j password

//     const driver = neo4j.driver(uri, neo4j.auth.basic(user, password));
//     const session = driver.session();

//     const {
//       songName,
//       songDesc,
//       songFile,
//       songTrack
//     } = formData;

//     const {
//       companyName,
//       wallet,
//       licenseFee,
//       views,
//       deadline
//     } = licensingCompanyData; // Assuming you have this data somewhere in your component

//     const txnHash = "TXN_HASH"; // Replace with actual transaction hash
//     const aclToken = "ACL_TOKEN"; // Replace with actual ACL token

//     try {
//       // Neo4j queries
//       const createSongQuery = `
//         CREATE (song:Song { 
//           songName: $songName, 
//           accessFlag: false, 
//           txnHash: $txnHash, 
//           aclToken: $aclToken 
//         })
//       `;

//       const createLicensingCompanyQuery = `
//         CREATE (licensingCompany:LicensingCompany { 
//           companyName: $companyName, 
//           wallet: $wallet, 
//           licenseFee: $licenseFee, 
//           views: $views, 
//           deadline: $deadline 
//         })
//       `;

//       const createLicensingToRelationshipQuery = `
//         MATCH (song:Song { songName: $songName }), 
//               (licensingCompany:LicensingCompany { companyName: $companyName })
//         CREATE (licensingCompany)-[:LicensingTo { 
//           accessFlag: false, 
//           txnHash: $txnHash, 
//           aclToken: $aclToken 
//         }]->(song)
//       `;

//       await session.run(createSongQuery, {
//         songName,
//         txnHash,
//         aclToken
//       });

//       await session.run(createLicensingCompanyQuery, {
//         companyName,
//         wallet,
//         licenseFee,
//         views,
//         deadline
//       });

//       await session.run(createLicensingToRelationshipQuery, {
//         songName,
//         companyName,
//         txnHash,
//         aclToken
//       });

//       // ... (existing code)
//     } catch (error) {
//       console.error("Error occurred:", error);
//     } finally {
//       session.close();
//       driver.close();
//     }
//   }

//   // ... (rest of the component)
// };

// export default AppForm;