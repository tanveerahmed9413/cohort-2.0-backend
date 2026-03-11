const express = require('express')
const userModel = require('../models/user.model')
const jwt = require('jsonwebtoken')


const authRouter = express.Router()

authRouter.post('/register', async(req,res)=>{
    const {name,email,password} =  req.body

    const isUserAlreadyExisst = await userModel.findOne({email})

    if(isUserAlreadyExisst){
        res.status(400).json({
            message: 'user already exist this email'
        })
    }

  const user = await  userModel.create({
        name,email,password
    })

    const token = jwt.sign(
        {
            id: user._id,
            email: user.email
        },
        process.env.JWT_SECRET

    )

    res.cookie('jwt_token',token)

    res.status(200).json({
        message: 'user create successfully',
        user,
        token
    })
})


module.exports = authRouter