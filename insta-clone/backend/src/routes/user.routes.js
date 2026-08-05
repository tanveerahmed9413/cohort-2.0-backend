const express = require('express')

const identifyUser = require('../middlewares/auth.middleware')

const userRouter = express.Router()
const userController = require("../controllers/user.controller")


// POST /api/users/follow
userRouter.post("/follow/:username",identifyUser,userController.followUserController);

// POST /api/users/unfollow
userRouter.post("/unfollow/:username",identifyUser,userController.unfollowUserController);

// GET /api/users/following-list
userRouter.get("/following-list",identifyUser,userController.getFollowingListController);

// GET /api/users/followers-list
userRouter.get("/followers-list",identifyUser,userController.getFollowerListController);


module.exports = userRouter