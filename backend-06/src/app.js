// server create karna
// server config karna
// database se connect karna

let express = require('express')
let mongoose = require('mongoose') 

const connectToDb = () => {
    mongoose.connect('mongodb+srv://editingmarket107_db_user:0fMHbMeFXWIY5juA@cohort-2-0.se6ejhu.mongodb.net/day-6')
    .then(()=>{
        console.log('connected database')
    })
    .catch(err => console.log(err)) 
}

connectToDb()


let app = express()


app.get('/',(req,res)=>{
    res.send('tanveer ahmed')
})

module.exports = app