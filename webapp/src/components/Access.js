import React, { useState } from "react";

function Access(props) {
  //   const [message, setMessage] = useState(props.CID);
  // bafybeiejzv6qwndwaifsdpo3lanmnpisbz3yyd5u6dbmnxxzqd6pdnmyxy
  const storedInDB = props.CID + "true";
  const companyHas = props.CID + props.flag;
  // locahost/Txn Hash + true ==> song is available ipfs.io/ipfs/CID wala page
  // locahost/Txn Hash + false ==> you dont have access

  // Helper function to convert string to hex
  const stringToHex = (str) => {
    return str
      .split("")
      .map((char) => char.charCodeAt(0).toString(16))
      .join("");
  };

  // Helper function to convert hex to string
  const hexToString = (hex) => {
    let result = "";
    for (let i = 0; i < hex.length; i += 2) {
      result += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
    }
    return result;
  };

  // Encoding message strings to hex
  const encodeTrue = stringToHex(storedInDB);
  const encodeFalse = stringToHex(companyHas);

  // Decoding hex strings back to original message
  const decodeTrue = hexToString(encodeTrue);
  const decodeFalse = hexToString(encodeFalse);

  const isAccessGranted = decodeTrue === decodeFalse;

  const handleAccessCheck = () => {
    if (isAccessGranted) {
      console.log(`https://ipfs.io/ipfs/${props.CID}`);
      window.open(`https://ipfs.io/ipfs/${props.CID}`);
    } else {
      alert("Access Denied!");
    }
  };
  return (
    <div>
      <h1>Message Component</h1>
      <p>Message: {props.CID}</p>
      <p>Message: {props.flag}</p>
      <button onClick={handleAccessCheck}>Check Access</button>
    </div>
  );
}

export default Access;
