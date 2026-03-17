const postModel = require('../models/post.model')
const jwt = require('jsonwebtoken')
const ImageKit = require('@imagekit/nodejs')
const {toFile} = require('@imagekit/nodejs')

const imageKit = ImageKit({
     privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})


async function postCreate(req,res) {

    let token =  req.cookies.token

    if(!token){
    return    res.status(401).json({
            message: 'token not provided, unouthrized access'
        })
    }


    let decoded;

    try{
         decoded = jwt.verify(token,process.env.JWT_SECRET)
    }
    catch(err){
     return   res.status(401).json({
            message: 'user not authorized'
        })
        
    }

    let file = await imageKit.files.upload({
        file: await toFile(req.file.buffer,'file'),
        fileName: 'post-image',
        folder: 'cohort-2-insta-clone-posts'
    })
  


let post = await postModel.create({
    caption: req.body.caption,
    imageUrl: file.url,
    user: decoded.id
  
})

res.status(201).json({
    message: 'post create successfully',
    post
})

}





module.exports  =  {
    postCreate
}