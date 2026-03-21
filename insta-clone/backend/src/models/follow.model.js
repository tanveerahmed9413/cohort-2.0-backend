const mongoose = require('mongoose')


let followSchema = new mongoose.Schema({
    follower: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: [true, 'follower is require']
    },
    following: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users',
        required: [true, 'folling is require']
    }
}, {
        timestemp: true

})


let followModel = mongoose.model('follow',followSchema)

module.exports = followModel