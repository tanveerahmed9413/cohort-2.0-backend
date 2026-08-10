
const express = require("express");
const cookeiParser = require("cookie-parser")
const cors = require("cors")



const app = express();
app.use(express.json())
app.use(cookeiParser())
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))




const  authRoutes = require("./routes/auth.routes")
const songRoutes = require("./routes/song.routes")

app.use("/api/auth",authRoutes)
app.use("/api/song",songRoutes)


module.exports = app;
