


require('dotenv').config()
const app = require('./src/app')


let port = 3000;


app.listen(port,()=>{
    console.log('server is running http://localhost:3000');
    
})