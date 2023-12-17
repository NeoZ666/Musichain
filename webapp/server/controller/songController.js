const Song = require('./../model/songModal');
const fs = require('fs');

const multer = require("multer");
const uploadMiddleware = multer({ dest: "./uploads/" });

exports.uploadFile = uploadMiddleware.single("songFile");

exports.uploadSong = (async (req, res, next) => {
    try{
  
      console.log("REQ FILE :", req.file);
  
      const { originalname, path } = req.file;
      const ext = originalname.split(".")[1];
  
      console.log(ext);
  
      const newPath = path + "." + ext;
      fs.renameSync(path, newPath);
  
      // 1) Check if the user has all the fields filled :
    const {
      songName,
      artistName,
      songDesc,
      sonfFile = newPath
    } = req.body;

    console.log("REQ BODY : ", req.body);
  
    // 3) If above both checks are passed, then start the process of creating new user :
    const songData = await Song.create({
      songName: req.body.songName,
      songDesc: req.body.songDesc,
      artistName: req.body.artistName,
      songFile: req.body.songFile = newPath
    });
  
    await songData.save();
  
    res.status(200).json({
        message: "success",
        songData: {
            songData
        }
    })
    }catch(e){
      console.log("ERROR : ",e);
    }
  });