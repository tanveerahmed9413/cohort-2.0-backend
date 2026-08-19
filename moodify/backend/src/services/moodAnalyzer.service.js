const axios = require("axios");
const FormData = require("form-data");

const detectMood = (features) => {
  const { energy, valence, danceability, tempo, loudness, speechiness } =
    features;

  // SAD
  if (energy < 0.4 && valence < 0.4 && tempo < 100) {
    return "sad";
  }

  // HAPPY
  if (energy >= 0.65 && valence >= 0.6 && danceability >= 0.6) {
    return "happy";
  }

  // ENERGETIC
  if (energy >= 0.7 && tempo >= 110) {
    return "energetic";
  }

  // ANGRY / ATTITUDE
  if (energy >= 0.55 && valence < 0.55 && loudness > -10) {
    return "angry";
  }

  // ATTITUDE / BADMASHI TYPE
  if (
    danceability >= 0.65 &&
    energy >= 0.5 &&
    speechiness >= 0.08 &&
    tempo >= 90
  ) {
    return "angry";
  }

  // CALM
  if (energy < 0.45 && valence >= 0.4) {
    return "calm";
  }

  // NEUTRAL
  return "neutral";
};

const analyzeAudio = async (audioBuffer, fileName) => {
  try {
    if (!audioBuffer || !Buffer.isBuffer(audioBuffer)) {
      throw new Error("Invalid audio buffer");
    }

    const form = new FormData();

    form.append("audioFile", audioBuffer, {
      filename: fileName || "song.mp3",
      contentType: "audio/mpeg",
      knownLength: audioBuffer.length,
    });

    const response = await axios({
      method: "POST",
      url: "https://api.reccobeats.com/v1/analysis/audio-features",
      data: form,
      headers: {
        ...form.getHeaders(),
        Accept: "application/json",
        "Content-Length": form.getLengthSync(),
      },
      maxBodyLength: Infinity,
      maxContentLength: Infinity,
      timeout: 180000,
    });

    const features = response.data;

    const mood = detectMood(features);

    return {
      mood,
      features,
    };
  } catch (error) {
    console.error(
      "ReccoBeats Error:",
      error.response?.status,
      error.response?.data || error.message,
    );

    throw new Error("Audio analysis failed");
  }
};

module.exports = {
  analyzeAudio,
  detectMood,
};
