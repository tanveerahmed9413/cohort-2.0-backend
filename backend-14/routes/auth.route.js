const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const cookieParser = require('cookie-parser')


let authRouter = express.Router();

// POST '/api/auth/register'
authRouter.post("/register", async (req, res) => {
  let { name, email, password } = req.body;

  let isUserExist = await userModel.findOne({ email });
  if (isUserExist) {
 return   res.status(409).json({
      message: "user already exist",
    });
  }

  let hash = crypto.createHash("sha256").update(password).digest("hex");

  let user = await userModel.create({
    name,
    email,
    password: hash,
  });

  let token = jwt.sign(
    {
      id: user._id,
    },
    process.env.JWT_SECRET,
    { expiresIn: "1h" },
  );

res.status(201).json({
  message: "user registered successfull",
  token,
  user:{
    id:user._id,
    name:user.name,
    email:user.email
  }
});
});


// GET '/api/auth/get-me'
authRouter.get('/get-me', async(req,res)=>{
    let token = req.cookies.jwt_token


    if(!token){
        return res.status(404).json({
            message: 'token missing'
        })
    }

    let decoded = jwt.verify(token,process.env.JWT_SECRET)

        
    let user = await userModel.findById(decoded.id)

    res.json({
        name: user.name,
        email: user.email
    })
})


// POST '/api/auth/login'
authRouter.post('/login', async(req,res)=>{
    let {email,password } = req.body

    let user = await userModel.findOne({email})



    if(!user){
        return res.status(404).json({
            message: 'user not found'
        })
    }

        let hashPassword = crypto.createHash('sha256').update(password).digest('hex')

    let isPasswordMatch = user.password === hashPassword

    if(!isPasswordMatch){
        return res.status(401).json({
            message: 'passowrd invalid'
        })
    }


    let token = jwt.sign({
        id: user._id
    },process.env.JWT_SECRET)


    res.cookie('jwt_token',token)

    res.status(200).json({
        message: 'login successfull',
        token,
        user:{
            id: user._id,
            name: user.name,
            email: user.email
        }
    })

})

// POST '/api/auth/logout'
authRouter.post('/logout',(req,res)=>{
    res.clearCookie('jwt_token')

    res.json({
        message: 'logout successfull'
    })
})



module.exports = authRouter;
