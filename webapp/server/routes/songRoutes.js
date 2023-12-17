const express = require("express");
const router = express.Router();
const songController = require("../controller/songController");

router.post("/uploadSong", songController.uploadFile, songController.uploadSong)
router.get("/getAllSongs", songController.getAllSongs)

module.exports = router;
