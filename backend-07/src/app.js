// server ko create karna 
// server ko confign karna


let express = require('express')

let notesModel = require('../models/notes.model')






let app = express()
app.use(express.json())


app.post('/notes', async (req,res)=>{
    let {title,description} = req.body

   let note = await notesModel.create({
        title, description
    })
    res.status(201).json({
        message: 'notes create succfully',
        note,
    })
})

app.get('/notes', async(req,res)=>{
    let notes = await notesModel.find()

    res.status(200).json({
        message: 'notes fetch successfully',
        notes,
    })
})


module.exports = app


