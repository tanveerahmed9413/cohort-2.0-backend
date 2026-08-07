const express = require("express");
const cookeiParser = require("cookie-parser")



const app = express();
app.use(express.json())
app.use(cookeiParser())




const  authRoutes = require("./routes/auth.routes")
app.use("/api/auth",authRoutes)
module.exports = app;
