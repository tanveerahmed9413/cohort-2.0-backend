const postModel = require("../models/post.model");
const likeModel = require("../models/like.model");

const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");

const imageKit = ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

// create post and send imageKit cloud plateform

async function postCreatreController(req, res) {
  let file = await imageKit.files.upload({
    file: await toFile(req.file.buffer, "file"),
    fileName: "post-image",
    folder: "cohort-2-insta-clone-posts",
  });

  let post = await postModel.create({
    caption: req.body.caption,
    imageUrl: file.url,
    user: req.user.id,
  });

  res.status(201).json({
    message: "post create successfully",
    post,
  });
}

// fetch post with a perticular user login

async function getPostController(req, res) {
  let userId = req.user.id;

  let post = await postModel.find({
    user: userId,
  });

  res.status(200).json({
    message: "post fetched",
    post,
  });
}

// fetch post details with userId

async function getPostDetailsContloller(req, res) {
  let userId = req.user.id;
  let postId = req.params.postId;

  let post = await postModel.findById(postId);

  if (!post) {
    return res.status(404).json({
      message: "post not found",
    });
  }

  let isValidUser = post.user.toString() === userId;

  if (!isValidUser) {
    return res.status(403).json({
      message: "forbidden conent",
    });
  }

  return res.status(200).json({
    message: "post detials fetch successfully",
    post,
  });
}

//  fetch all posts 

async function getAllPosts(req, res) {
  const user = req.user;

  const userLikes = await likeModel.find({
    user: user.id
  });


  const likedPostIds = new Set(
    userLikes.map(like => like.post.toString())
  );

  let allPost = (await postModel.find().populate('user').sort({ _id: -1 }).lean())
    .map(post => {

      post.isLiked = likedPostIds.has(post._id.toString());

      return post;
    });

  return res.status(200).json({
    message: "all post fetch successfully",
    allPost
  });
}

//  post like karna
async function likePostController(req, res) {
  let userId = req.user._id;
  let postId = req.params.postId;

  let post = await postModel.findById(postId);

  if (!post) {
    return res.status(400).json({
      message: "post not found",
    });
  }



  let like = await likeModel.create({
    user: userId,
    post: postId,
  });

  res.status(200).json({
    message: "post like successfully",
    like,
  });
}

module.exports = {
  postCreatreController,
  getPostController,
  getPostDetailsContloller,
  getAllPosts,
  likePostController,
};
