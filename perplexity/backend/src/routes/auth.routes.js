import express from "express";

import { login, register } from "../controllers/auth.controller.js";
import { verifyEmail } from "../controllers/verifyEmail.controller.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);

router.get("/verify-email", verifyEmail);

export default router;