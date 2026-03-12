const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");

const authRouter = express.Router();

// POST '/api/auth/register'

authRouter.post("/register", async (req, res) => {
  let { name, email, password } = req.body;

  let isUserAlreadyExist = await userModel.findOne({ email });

  if (isUserAlreadyExist) {
    res.status(409).json({
      message: "user already exist this email",
    });
  }

  let has = crypto.createHash('md5').update(password).digest('hex')

  let user = await userModel.create({
    name,
    email,
    password : has,
  });

  let token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRETE,
  );

  res.status(201).json({
    message: "user create successfully",
    user,
    token,
  });
});

// POST '/api/auth/login'
authRouter.post("/login", async (req, res) => {
  let { email, password } = req.body;

  let user = await userModel.findOne({ email });

  if (!user) {
    return res.status(404).json({
      message: "user not found",
    });
  }

  let isPasswordMatch = user.password === crypto.createHash('md5').update(password).digest('hex');

  if (!isPasswordMatch) {
    return res.status(401).json({
      message: "invalid password",
    });
  }

  const token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRETE,
  );

  res.cookie("jwt_token", token);

  res.status(200).json({
    message: "user login successfully",
    user,
  });
});
module.exports = authRouter;
