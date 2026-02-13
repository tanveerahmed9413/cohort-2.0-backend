// let catMe = require('cat-me')

// catMe()

// console.log(catMe())



// const { log } = require('console')



const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
