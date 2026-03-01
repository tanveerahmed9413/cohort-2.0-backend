// server ko start karna


let app = require('./src/app')

let port  = 3000

app.listen(port,()=>{
    console.log('server is running http://localhosst:3000')
})