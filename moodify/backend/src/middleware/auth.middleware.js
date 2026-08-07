

const jwt = require("jsonwebtoken")
const cookie = require("cookie-parser")
const blackListModel = require("../models/blackList.model")

async function authUser(req,res,next){
    const token = req.cookies.token

    if(!token){
        return res.status(401).json({
            message: 'Token Not Provide'
        })
    }

    let isTokenBlacklisted = await blackListModel.findOne({
        token
    })

    if(isTokenBlacklisted){
        return res.status(200).json({
            message: 'invalid token'
        })
    }

    try{
        let decoded = jwt.verify(token,process.env.JWT_SECRET)
    
        req.user = decoded
        next()

    }catch(err){
        return res.status(401).json({
            message: "invalid token"
        })
    }

}

module.exports = authUser