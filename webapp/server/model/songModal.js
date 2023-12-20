const mongoose = require("mongoose");

const songSchema = new mongoose.Schema({
  songName: {
    type: String,
  },
  artistName: {
    type: String,
  },
  songDesc: {
    type: String,
  },
  songTrack: {
    type: String,
  },
  songFile: {
    type: String,
  },
});

const Song = mongoose.model("Song", songSchema);

module.exports = Song;


