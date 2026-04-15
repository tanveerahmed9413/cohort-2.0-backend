const userModel = require("../models/user.model");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

// register controller
async function registerController(req, res) {
  const { username, email, password, bio, profileImage } = req.body;

  let isUserAlreadyExist = await userModel.findOne({
    $or: [{ username }, { email }],
  });

  if (isUserAlreadyExist) {
    return res.status(409).json({
      message:
        isUserAlreadyExist.email === email
          ? "Email already exist"
          : "Username already exist",
    });
  }

  let hashPassword = crypto.createHash("sha256").update(password).digest("hex");

  const user = await userModel.create({
    username,
    email,
    password: hashPassword,
    bio,
    profileImage,
  });

  let token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.cookie("token", token);

  res.status(201).json({
    message: " user successfully registered",
    token,
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio,
      prifileImage: user.profileImage,
    },
  });
}

// login controller
async function loginController(req, res) {
  const { username, password, email } = req.body;

  const user = await userModel.findOne({
    $or: [{ email }, { username }],
  });

  let hashPassword = crypto.createHash("sha256").update(password).digest("hex");

  if (!user) {
    return res.status(404).json({
      message: "user not found",
    });
  }
  let correctPassword = (user.password === hashPassword);

  if (!correctPassword) {
    return res.status(409).json({
      message: "password invalid",
    });
  }

  let token = jwt.sign(
    {
      id: user._id,
      username: user.username,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1d" },
  );

  res.cookie("token", token);

  res.status(201).json({
    message: "user login successfully",
    token,
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio,
      prifileImage: user.profileImage,
    },
  });
}

// get-me controller
async function getMeController(req, res) {
  let userId = req.user.id;


  let user = await userModel.findById(userId);

  res.status(200).json({
    user: {
      username: user.username,
      email: user.email,
      bio: user.bio,
      profileImage: user.profileImage,
    },
  });
}

module.exports = {
  registerController,
  loginController,
  getMeController,
};
