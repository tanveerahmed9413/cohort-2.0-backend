const mongoose = require('mongoose')


let noteSchema = new mongoose.Schema({
    title: String,
    description: String,
})

let noteModel = mongoose.model('notes',noteSchema)

module.exports = noteModel