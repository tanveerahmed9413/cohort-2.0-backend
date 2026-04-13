const express = require('express')

const identifyUser = require('../middlewares/auth.middleware')

const userRouter = express.Router()
const userController = require("../controllers/user.controller")


// POST /api/users/folow
userRouter.post("/follow/:username",identifyUser,userController.followUserController);

// POST /api/users/unfollow
userRouter.post("/unfollow/:username",identifyUser,userController.unfollowUserController);



module.exports = userRouter