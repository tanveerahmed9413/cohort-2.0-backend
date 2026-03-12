const mongoose = require('mongoose')



let userSchema = new mongoose.Schema({
    name: String,
    password: String,
    email: {
        type: String,
        unique: [true, 'with this email account already exist']
    }
})

let userModel = mongoose.model('users',userSchema)



module.exports = userModel