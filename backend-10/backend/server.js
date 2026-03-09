require('dotenv').config()
const app = require('./src/app')
let connectToDb = require('./src/config/database')

connectToDb()


app.listen(3000,()=>{
    console.log('server is running http://localhost:3000');
})