let mongoose = require('mongoose')

let connectToDb = ()=>{
    mongoose.connect('mongodb+srv://editingmarket107_db_user:0fMHbMeFXWIY5juA@cohort-2-0.se6ejhu.mongodb.net/day-7')
    .then(()=>{
        console.log('database connected');
    })
    .catch(err => console.log(err))
}

module.exports = connectToDb