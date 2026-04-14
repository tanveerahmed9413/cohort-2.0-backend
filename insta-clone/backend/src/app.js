
const express = require('express')
const cookieParser = require('cookie-parser')
const cors = require('cors')


const app = express()
app.use(cors())
app.use(express.json())
app.use(cookieParser())



const authRouter = require('../src/routes/auth.route')
const postRouter = require('../src/routes/post.route')
const userRouter = require('../src/routes/user.routes')

app.use('/api/auth',authRouter)
app.use('/api/posts',postRouter)
app.use('/api/users',userRouter)


module.exports = app