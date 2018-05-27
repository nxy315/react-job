const express = require('express')
const userRouter = require('./user')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const app = express();
const port = 8888

app.use(cookieParser())
app.use(bodyParser.json())

app.use('/user', userRouter)

app.listen(port, () => {
  console.log(`Server start at port ${port}`)
})