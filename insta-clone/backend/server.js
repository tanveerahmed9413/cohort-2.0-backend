

require('dotenv').config()
const app = require('./src/app')
const connectToDb = require('./src/config/database')


let port = 3000
connectToDb()

app.listen(port,()=>{
    console.log('server is running');
    
})
