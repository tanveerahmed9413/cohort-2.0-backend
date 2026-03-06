const  mongoose = require('mongoose')


const noteScheme =  new mongoose.Schema({
    title: String,
    description: String,
})

let noteModel = mongoose.model('notes',noteScheme)


module.exports =  noteModel