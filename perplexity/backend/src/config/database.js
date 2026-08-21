import mongoose from "mongoose";

function connectToDb(){
    mongoose.connect(process.env.MONGO_URI)
    .then(()=>{
        console.log("connect to database successfully")
    })
    .catch((err)=>{
        console.log("database failed",err)
    })
}

export default connectToDb