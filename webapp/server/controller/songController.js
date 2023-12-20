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
  try {
    // HANDLING THE SONG COVER IMAGE :

    // console.log(req.files.songFile[0].originalname);

    const { originalname, path } = req.files.songFile[0];
    const ext = originalname.split(".")[1];
    const newPath = path + "." + ext;
    fs.renameSync(path, newPath);

    // console.log( "NEW PATH : ", newPath);

    // HANDLING THE SONG track :
    const songFilePath = req.files.songTrack[0].path;
    const fileRead = fs.readFileSync(songFilePath);
    // IPFS/nft-storage/main-branch
    const client = new NFTStorage({ token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJkaWQ6ZXRocjoweGJjOUZmMDcyQjA3ODAyZDU4YmI3NDc4YjZGNEVCRjNCNjQwNzhBRTkiLCJpc3MiOiJuZnQtc3RvcmFnZSIsImlhdCI6MTcwMjk1NDI1MTY5NCwibmFtZSI6IlRlc3RLZXkifQ.7rw8QXtwHKs2SyYV25RMsfMjuCu9SoIHs4HUQ4h5B4c" });
    const fileBlob = new Blob([fileRead]);
    const fileCID = await client.storeBlob(fileBlob);

    console.log("FILECID :", fileCID);

    console.log({ fileCID });

    // 1) Check if the user has all the fields filled :
    const {
      songName,
      artistName,
      songDesc,
      sonfFile = newPath,
      songTrack = fileCID,
    } = req.body;

    // 3) If above both checks are passed, then start the process of creating new user :
    const songData = await Song.create({
      songName: req.body.songName,
      songDesc: req.body.songDesc,
      artistName: req.body.artistName,
      songFile: (req.body.songFile = newPath),
      songTrack: (req.body.songTrack = fileCID),
    });

    await songData.save();

    res.status(200).json({
      message: "success",
      songData
    });
  } catch (e) {
    console.log("ERROR : ", e);
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
