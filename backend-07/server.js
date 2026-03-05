// server ko start karna
// database se connect karna


let app = require('./src/app')
let connectToDb = require('./src/config/database')




connectToDb()


app.listen(3000,()=>{
    console.log('sever is running');
    
})