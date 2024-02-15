const express = require("express");
const router = express.Router();
const songController = require("../controller/songController");

router.post("/uploadSong", songController.uploadFiles, songController.uploadSong)
router.get("/getAllSongs", songController.getAllSongs)
router.get("/getSongs", songController.getSongs);

module.exports = router;
