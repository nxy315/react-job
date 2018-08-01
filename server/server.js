const express = require('express')
const userRouter = require('./user')
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const model = require('./model')
// const User = model.getModel('user')
const Chat = model.getModel('chat')
const app = express();

const server = require('http').Server(app)
const io = require('socket.io')(server)

io.on('connection', function(socket) {
  socket.on('sendmsg', function(data) {
    const {from, to, msg} = data
    console.log(data)
    const chatid = [from, to].sort().join('_')
    Chat.create({chatid, from, to, content: msg}, (e, d) => {
      io.emit('recvmsg', Object.assign({}, d._doc))
    })
  })
})

const port = 8888

app.use(cookieParser())
app.use(bodyParser.json())

app.use('/user', userRouter)

server.listen(port, () => {
  console.log(`Server start at port ${port}`)
})