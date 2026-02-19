const express = require('express')

let app = express()

let port = 3000

app.get('/',(res,req)=>{
    req.send('Tanveer Ahmed')
})

app.get('/home',(res,req)=>{
    req.send('This is home page')
})

app.listen(port,()=>{
    console.log(`server is running http://localhost:3000`);
    
})