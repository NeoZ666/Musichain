const express = require("express");
const multer = require("multer");
const dotenv = require("dotenv");
const { exec } = require("child_process");

dotenv.config({ path: "../env" });
const cors = require("cors");
const { ThirdwebStorage } = require("@thirdweb-dev/storage");
const fs = require("fs");

const app = express();

app.use(cors());

const upload = multer({ dest: "uploads/" });

const storage = new ThirdwebStorage({
  secretKey: process.env.THIRD_WEB_SECRET_KEY, // Replace with your secret key
});

app.get("/test", async (req, res) => {
  return res.json("Test");
});

// app.post("/upload", upload.single("file"), async (req, res) => {
//   console.log("test message");
//   const file = req.file;

//   console.log("File : ", file);

//   const { originalname, path } = req.file;
//   const ext = originalname.split(".")[1];

//   console.log(ext);

//   const newPath = path + "." + ext;
//   fs.renameSync(path, newPath);

//   console.log(newPath);

//   try {
//     const uri = await storage.upload(file);
//     console.log("uri", uri);
//     const url = await storage.resolveScheme(uri);
//   } catch {
//     (e) => {
//       console.log(e);
//     };
//   }

//   res.json({ url });
// });

app.get("/run-script", (req, res) => {
  exec(
    "bash D:/Shashwat/Projects/MusiChain/IPFS-uploader/server/scripts/Shashwat.sh",
    (error, stdout, stderr) => {
      if (error) {
        console.log(`error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.log(`stderr: ${stderr}`);
        return;
      }
      console.log(`stdout: ${stdout}`);
    }
  );
  res.send("Script executed");
});

app.listen(5000, () => console.log("Server started on port 5000"));
