import React, { useState } from "react";
import { ThirdwebStorage } from "@thirdweb-dev/storage";

function App() {
  const [file, setFile] = useState(null);
  const [urlArr, setUrlArr] = useState([]);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleFileUpload = async () => {
    if (file) {
      console.log(process.env.THIRD_WEB_SECRET_KEY);
      const storage = new ThirdwebStorage({
        secretKey: process.env.THIRD_WEB_SECRET_KEY, // Third Web Storage Secret Key
      });

      const uri = await storage.upload(file);
      const url = await storage.resolveScheme(uri);

      setUrlArr((prev) => [...prev, url]);
    }
    const res = fetch("/upload");
  };

  useEffect(() => {
    fetch("http://localhost:5000/run-script")
      .then((response) => response.text())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="App">
      <input type="file" onChange={handleFileChange} />
      <button onClick={handleFileUpload}>Upload</button>
      <div className="display">
        {urlArr.length !== 0 ? (
          urlArr.map((el) => <img src={el} alt="nfts" />)
        ) : (
          <h3>Upload data</h3>
        )}
      </div>
    </div>
  );
}

export default App;
