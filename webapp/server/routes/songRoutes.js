const express = require("express");
const router = express.Router();
const songController = require("../controller/songController");

router.post("/uploadSong", songController.uploadFile, songController.uploadSong)

module.exports = router;
