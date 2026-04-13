const express = require("express");
const postController = require("../controllers/post.controller");
const postRouter = express.Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });
const identifyUser = require("../middlewares/auth.middleware");

/*  POST "api/posts"
    req.body = {caption, image-file}
 */
postRouter.post(
  "/",
  upload.single("image"),
  identifyUser,
  postController.postCreatreController,
);

// GET "api/posts"

postRouter.get("/", identifyUser, postController.getPostController);

//  GET  "api/posts/details/:postId"

postRouter.get(
  "/details/:postId",
  identifyUser,
  postController.getPostDetailsContloller,
);

// POST "api/posts/like/:postId"

postRouter.post(
  "/like/:postId",
  identifyUser,
  postController.likePostController,
);

module.exports = postRouter;
