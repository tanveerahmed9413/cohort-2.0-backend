const mongoose = require('mongoose')

// console.log(process.env.MONGO_URI)

function connectToDb(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('database is connected');
    })
}


module.exports = connectToDb