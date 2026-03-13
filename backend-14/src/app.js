const express = require("express");
const connectToDb = require("./config/database");
const authRouter = require("../routes/auth.route");
const cookieParser = require("cookie-parser");

const app = express();
app.use(cookieParser())
app.use(express.json());


app.use("/api/auth", authRouter);

connectToDb();

module.exports = app;
