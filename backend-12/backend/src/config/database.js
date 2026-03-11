const mongoose = require('mongoose')

function connecgToDb (){
    mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('datbase is connected');
})
}

module.exports = connecgToDb