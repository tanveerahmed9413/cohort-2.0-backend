

const mongoose = require('mongoose')

let postSchema = new mongoose.Schema({
    caption: {
        type: String,
        default: ""
    },
    imageUrl:{
        type: String,
        required: [true, 'image is required for carating an post']
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: [true, 'user id is required for creating']
    }
})


const postModel = mongoose.model('posts',postSchema)

module.exports =  postModel