const mongoose = require('mongoose')


function connectToDb(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log('DATABASE IS CONNECTED');
        
    })
}


module.exports = connectToDb