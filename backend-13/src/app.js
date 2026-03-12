const express = require('express')
const connectToDb = require('./config/database')
const authRouter = require('../routes/auth.route')


const app = express()

app.use(express.json())
app.use('/api/auth',authRouter)



connectToDb()




module.exports = app