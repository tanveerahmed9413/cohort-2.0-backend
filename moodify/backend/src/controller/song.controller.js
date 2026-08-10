const songModel = require("../models/song.model");
const upload = require("../middleware/multer.middleware");
const imagekit = require("../services/imageKit.service");
const id3 = require("node-id3");

async function uploadSong(req, res) {
  try {
    const songBuffer = req.file.buffer;
    const { mood } = req.body;

    const tags = id3.read(songBuffer);

    if (!tags?.title) {
      return res.status(400).json({
        success: false,
        message: "Song title not found in metadata",
      });
    }

    if (!tags?.image?.imageBuffer) {
      return res.status(400).json({
        success: false,
        message: "Song poster not found",
      });
    }

    const songFile = await imagekit.uploadFile({
      buffer: songBuffer,
      fileName: `${tags.title}.mp3`,
      folder: "/cohort-2/moodify/songs",
    });

    const posterFile = await imagekit.uploadFile({
      buffer: tags.image.imageBuffer,
      fileName: `${tags.title}.jpeg`,
      folder: "/cohort-2/moodify/posters",
    });

    const song = await songModel.create({
      title: tags.title,
      songUrl: songFile.url,
      posterUrl: posterFile.url,
      mood,
    });

    return res.status(201).json({
      success: true,
      message: "Song created successfully",
      song,
    });
  } catch (error) {
    console.error("UPLOAD ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Song upload failed",
      error: error.message,
    });
  }
}

async function getSongs(req,res){
    let songs = await songModel.find()

    console.log(songs)
    return res.status(200).json({
        message: "song fetched successfully",
        songs
    })
 
}

module.exports = { uploadSong,getSongs };
