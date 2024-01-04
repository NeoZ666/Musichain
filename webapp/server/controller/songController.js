const Song = require("./../model/songModal");
const fs = require("fs");
const { NFTStorage, Blob } = require("nft.storage");

const multer = require("multer");
const uploadMiddleware = multer({ dest: "./uploads/" });

exports.uploadFiles = uploadMiddleware.fields([
  { name: "songFile", maxCount: 1 },
  { name: "songTrack", maxCount: 1 },
]);

exports.uploadSong = async (req, res, next) => {
  console.log("DATA 16");
  try {
    // HANDLING THE SONG COVER IMAGE :
    // console.log(req.files);
    // console.log(req.files.songTrack[0].originalname);

    if (!req.files || !req.files.songFile || req.files.songFile.length === 0) {
      throw new Error("No songFile found in request or it's empty.");
    }

    // IMAGE :
    const { originalname, path } = req.files.songFile[0];
    const ext = originalname.split(".")[1];
    const newPath = path + "." + ext;
    fs.renameSync(path, newPath);

    console.log(newPath);

    // console.log("DATA 27");

    // console.log( "NEW PATH : ", newPath);

    // HANDLING THE SONG track :
    const songFilePath = req.files.songTrack[0].path;

    // console.log(songFilePath);
    const fileRead = fs.readFileSync(songFilePath);

    console.log( "FILE READ : ", fileRead);
    // IPFS/nft-storage/main-branch
    const client = new NFTStorage({
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGJjOUZmMDcyQjA3ODAyZDU4YmI3NDc4YjZGNEVCRjNCNjQwNzhBRTkiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTcwMjk1NDI1MTY5NCwibmFtZSI6IlRlc3RLZXkifQ.7rw8QXtwHKs2SyYV25RMsfMjuCu9SoIHs4HUQ4h5B4c",
    });

    // console.log("DATA 49");
    const fileBlob = new Blob([fileRead]);

    console.log(fileBlob)

    // // IDHAR TA HO RAHA HAI
    // console.log("DATA 55");

    // const fileCID = await client.storeBlob(fileBlob);

    // console.log("DATA 60");

    // if(!fileCID){
    //   throw new Error("FILECID is found in request or it's empty.");
    // }

    // console.log("FILE CID : ", fileCID)

    // console.log({ fileCID });

    console.log("DATA 43");

    // 1) Check if the user has all the fields filled :
    const {
      songName,
      artistName,
      songDesc,
      songFile = newPath,
      // songTrack = fileCID,
    } = req.body;

    console.log("REQ.BODY :", req.body);

    // console.log("DATA 54");

    // 3) If above both checks are passed, then start the process of creating new user :
    const songData = await Song.create({
      songName: req.body.songName,
      songDesc: req.body.songDesc,
      artistName: req.body.artistName,
      songFile: (req.body.songFile = newPath),
      // songTrack: (req.body.songTrack = fileCID),
    });

    await songData.save();

    res.status(200).json({
      message: "success",
      songData,
    });
  } catch (e) {
    console.log("ERROR UPLOADSONG 95 : ", e);
  }
};

exports.getAllSongs = async (req, res) => {
  try {
    // Fetch all users
    const songs = await Song.find({});

    res.status(200).json(songs); // Send all users in the response
  } catch (err) {
    console.error("ERROR", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getSongs = async (req, res) => {
  try {
    const artistSongs = await Song.find({ artistName: "Drake" });

    res.status(200).json({
      message: "success",
      length: artistSongs.length,
      artistSongs,
    });
  } catch (err) {
    console.log("ERROR : ", err);
  }
};
