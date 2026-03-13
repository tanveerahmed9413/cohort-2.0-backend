const mongoose = require('mongoose')

let userSchema = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: [true, 'with this email is already account exist']
    },
    password: String
})

let userModel = mongoose.model('users',userSchema)


module.exports = userModel