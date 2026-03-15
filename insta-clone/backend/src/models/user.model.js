const mongoose = require("mongoose");

let userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: [true, "with this username is already account exist"],
    required: [true, "username is required"],
  },
  email: {
    type: String,
    unique: [true, "with this email is already account exist"],
    required: [true, "email is required"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
  },
  bio: String,
  profileImage: {
    type: String,
    default: "https://ik.imagekit.io/wfu2z1vqz/userImage.avif",
  },
});

let userModel = mongoose.model("users", userSchema);

module.exports = userModel;
