const express = require('express')
const mongoose = require('mongoose')
const noteModel = require('../models/note.model')
const cors = require('cors')
const path = require('path')


const app = express()
app.use(express.json())
app.use(cors())


app.use(express.static('./public'))


// POST '/api/notes'

app.post('/api/notes', async(req,res)=>{
    let {title,description} = req.body
    

    let note = await noteModel.create({
        title,description
    })
    res.status(201).json({
        message: 'notes create successfull',
        note,
    })
    
    
})
// GET '/api/notes'

app.get('/api/notes', async(req,res)=>{

    let note = await noteModel.find()

    res.status(200).json({
        message: 'notes fetch successfull',
        note

    })


})
// DELETE '/api/notes'

app.delete('/api/notes/:id', async(req,res)=>{

    let id  = req.params.id

    let note = await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message: 'note delete successfull',
        note
    })



})
// PATCH '/api/notes'

app.patch('/api/notes/:id', async (req, res) => {

  let id = req.params.id
  let { title, description } = req.body

  let note = await noteModel.findByIdAndUpdate(
    id,
    { title, description },
    { new: true }
  )

  res.status(200).json({
    message: "note update successful",
    note
  })
})


app.use('*name',(req,res)=>{
  res.sendFile(path.join(__dirname,'..', '/public/index.html'))
})


module.exports  = app