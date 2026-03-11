const mongoose = require('mongoose')


const userScheme = new mongoose.Schema({
    name: String,
    email: {
        type: String,
        unique: [true, 'with this email user already created account']
    },
    password: String,
})

const usersModel = mongoose.model('users',userScheme)


module.exports = usersModel;