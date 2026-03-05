let mongoose = require('mongoose')


const notesSchema = new mongoose.Schema({
     title: String,
    description: String,
})
   

let notesModel = mongoose.model('notes',notesSchema)

module.exports = notesModel