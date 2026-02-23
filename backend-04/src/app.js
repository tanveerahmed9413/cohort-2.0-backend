// server create karna 
// server config karna


const express = require('express')

const app = express()

app.use(express.json())

let notes = []


app.get('/',(req,res)=>{
    res.send('app is running successfully ')
})

// POST API
app.post('/notes',(req,res)=>{
    
    console.log(req.body);
    notes.push(req.body)

    console.log(notes);
    
    
    res.send('notes create successfully')
})



// GET API 
app.get('/notes',(req,res)=>{
    res.send(notes)
})



// DELETE API
app.delete('/notes/:index',(req,res)=>{
    console.log(req.params.index)
    delete notes[req.params.index]

    res.send('notes delete successfully')
})


// PATCH API    
app.patch('/notes/:index',(req,res)=>{

        notes[req.params.index].description = req.body.description
        res.send('description update')
})

module.exports = app