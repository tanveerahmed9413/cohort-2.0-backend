const express = require('express')
const noteModel = require('../models/note.model')
const cors = require('cors')
const path = require('path')

const app = express()
app.use(express.json())
app.use(cors())

app.use(express.static('./public'))





// notes create api
app.post('/api/notes', async(req,res)=>{

    let {title,description} = req.body

 let note = await   noteModel.create({
        title,description
    })
    res.status(201).json({
        message: 'notes create successfully',
        note
    })

})

// notes find api
app.get('/api/notes', async(req,res)=>{
    let note = await noteModel.find()

    res.status(200).json({
        message: 'notes fetched successfully',
        note
    })
})


// notes delte api
app.delete('/api/notes/:id', async(req,res)=>{

    let id = req.params.id

    let note = await noteModel.findByIdAndDelete(id)

    res.status(200).json({
        message: 'notes delete successfully',
        note
    })
    
})


// notes update api
app.patch('/api/notes/:id', async(req,res)=>{
    let id = req.params.id
    let {description } = req.body

  let note = await  noteModel.findByIdAndUpdate(
    id,
    {description},
    {new: true},
  )

res.status(200).json({
    message: 'notes update successfully',
    note
})

})


app.use('*name',(req,res)=>{
    res.sendFile(path.join(__dirname, '..', '/public/index.html'))
})




module.exports =  app
