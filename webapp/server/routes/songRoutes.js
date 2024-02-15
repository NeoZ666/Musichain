const express = require("express");
const router = express.Router();
const songController = require("../controller/songController");
const authController = require("./../controller/userController");

router.post("/uploadSong", songController.uploadFiles, songController.uploadSong)
router.get("/getAllSongs", songController.getAllSongs)
router.get("/:artistName/getSongs", authController.protect, songController.getSongs);

module.exports = router;
