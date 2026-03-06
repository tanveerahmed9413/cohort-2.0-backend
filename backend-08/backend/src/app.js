/* server ko create karna */
/* server ko config karna */

let express = require('express')
let noteModel =  require('../models/note.model')
let cors =  require('cors')

let app = express()

/* midelware */
app.use(express.json())
app.use(cors())



/* POST '/api/notes' */
app.post('/api/notes', async(req,res)=>{
    let {title,description} = req.body

  let note =  await noteModel.create({
        title, description
    })

    res.status(201).json({
        message: 'notes created sucessfully',
        note
    })
})


/* GET '/api/notes' */
app.get('/api/notes', async(req,res)=>{
       let note =  await  noteModel.find()

       res.status(200).json({
        message: 'notes fetch fuccessfully',
        note
       })
})

/* DELETE '/api/notes' */
app.delete('/api/notes/:id', async(req,res)=>{
    let id = req.params.id
    let note =    await noteModel.findByIdAndDelete(id)


    res.status(200).json({
        message: 'notes delete successfully',
        note
    })
    
})

/* UPDATE '/api/notes/id' */
app.patch('/api/notes/:id',async(req,res)=>{
    let id  = req.params.id

    let { description } = req.body

    let note  = await noteModel.findByIdAndUpdate(
        id,
      {description},
      {new: true}
    )

    res.status(200).json({
        message: 'notes update successfully',
        note
    })
})

module.exports = app