require('dotenv').config()
const app = require('./src/app')
const connecgToDb = require('./src/config/database')
let port = 3000

connecgToDb()


app.listen(port,()=>{
    console.log('server is running');
})

