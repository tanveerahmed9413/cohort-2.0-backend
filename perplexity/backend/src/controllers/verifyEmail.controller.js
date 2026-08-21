
import jwt from "jsonwebtoken"
import userModel from "../models/user.model.js";

export const verifyEmail = async (req, res) => {
  try {
    const { token } = req.query;

    if (!token) {
      return res.status(400).json({
        message: "Verification token is required",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    const user = await userModel.findById(decoded.userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (user.verified) {
      return res.status(200).json({
        message: "Email is already verified",
      });
    }

    user.verified = true;

    await user.save();

    return res.status(200).json({
      message: "Email verified successfully",
    });
  } catch (error) {
    console.error("Email verification error:", error);

    if (error.name === "TokenExpiredError") {
      return res.status(400).json({
        message: "Verification link has expired",
      });
    }

    if (error.name === "JsonWebTokenError") {
      return res.status(400).json({
        message: "Invalid verification link",
      });
    }

    return res.status(500).json({
      message: "Something went wrong",
    });
  }
};
