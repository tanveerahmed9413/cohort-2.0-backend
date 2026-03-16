const postModel = require('../models/post.model')

const ImageKit = require('@imagekit/nodejs')
const {toFile} = require('@imagekit/nodejs')

const imageKit = ImageKit({
     privateKey: process.env.IMAGEKIT_PRIVATE_KEY
})


async function postCreate(req,res) {
    console.log(req.body, req.file)

    let file = await imageKit.files.upload({
        file: await toFile(req.file.buffer,'file'),
        fileName: 'post-image'
    })
    res.send(file)
}





module.exports  =  {
    postCreate
}