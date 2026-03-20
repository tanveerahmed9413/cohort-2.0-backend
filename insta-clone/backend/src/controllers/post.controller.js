const postModel = require("../models/post.model");
const jwt = require("jsonwebtoken");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");

const imageKit = ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

// create post and send imageKit cloud plateform

async function postCreatreController(req, res) {
  let token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "token not provided, unouthrized access",
    });
  }

  let decoded;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({
      message: "user not authorized",
    });
  }

  let file = await imageKit.files.upload({
    file: await toFile(req.file.buffer, "file"),
    fileName: "post-image",
    folder: "cohort-2-insta-clone-posts",
  });

  let post = await postModel.create({
    caption: req.body.caption,
    imageUrl: file.url,
    user: decoded.id,
  });

  res.status(201).json({
    message: "post create successfully",
    post,
  });
}

// fetch post with a perticular user login

async function getPostController(req, res) {
  let token = req.cookies.token;


  if (!token) {
  return res.status(401).json({
    message: "user not authorized",
  });
}

  let decoded;

  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({
      message: "server unouthrized access",
      err,
    });
  }

  let userId = decoded.id;

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
  let token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "user not authorized ",
    });
  }

  let decoded;
  try {
    decoded = jwt.verify(token, process.env.JWT_SECRET);
  } catch (err) {
    return res.status(401).json({
      message: "server anothrized access",
    });
  }


  let userId = decoded.id
  let postId = req.params.postId

let post = await postModel.findById(postId)

if(!post){
    return res.status(404).json({
        message: "post not found"
    })
}

let isValidUser = post.user.toString() === userId

if(!isValidUser){
    return res.status(403).json({
        message: 'forbidden conent'
    })
}


return res.status(200).json({
    message : 'post detials fetch successfully',
    post

})

}

module.exports = {
  postCreatreController,
  getPostController,
  getPostDetailsContloller
};
