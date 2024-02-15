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

    // IMAGE :
    const { originalname, path } = req.files.songFile[0];
    const ext = originalname.split(".")[1];
    const newPath = path + "." + ext;
    fs.renameSync(path, newPath);

    console.log(newPath);

    // console.log("DATA 27");

    // console.log( "NEW PATH : ", newPath);

    console.log("DATA 43");

    // 1) Check if the user has all the fields filled :

    console.log("REQ BODY : ", req.body);

    const {
      songName,
      artistName,
      songDesc,
      songFile = newPath,
    } = req.body;

    console.log("REQ.BODY :", req.body);

    // console.log("DATA 54");

    // 3) If above both checks are passed, then start the process of creating new user :
    const songData = await Song.create({
      songName: req.body.songName,
      songDesc: req.body.songDesc,
      artistName: req.body.artistName,
      songFile: (req.body.songFile = newPath),
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
  console.log("SONGS CONTROLLER");

  try {
    console.log("SONGS CONTROLLER inside");
    // Fetch all users
    const songs = await Song.find();

    console.log(songs);

    res.status(200).json(songs); // Send all users in the response
  } catch (err) {
    console.error("ERROR", err);
    res.status(500).json({ message: "Internal server error" });
  }
};

exports.getSongs = async (req, res) => {
  try {
    const {name} = req.user;
    const artistSongs = await Song.find({ artistName: name });

    console.log(artistSongs);
    res.status(200).json({
      message: "success",
      length: artistSongs.length,
      artistSongs,
    });
  } catch (err) {
    console.log("ERROR : ", err);
  }
};
