const express = require('express')
const utils = require('utility')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
const Chat = model.getModel('chat')
const _filter = {'pwd': 0, '__v': 0}

Router.get('/getmsglist', (req, res) => {
  const user = req.cookies.userid
  console.log(user)
  Chat.find({}, (e, d) => {
    if(!e) {
      return res.json({code:0, msgs: d})
    }
  })
})

Router.get('/list', (req, res) => {
  const { type } = req.query
  User.find({ type }, {'__v': 0}, (err, doc) => {
    return res.json({code: 0, data: doc})
  })
})

Router.post('/register', (req, res) => {
  const {user, pwd, type} = req.body
  User.findOne({user}, (err, doc) => {
    if(doc) {
      return res.json({code: 1, msg: '用户重复'})
    }
    const userModel = new User({user, type, pwd: md5Pwd(pwd)})
    userModel.save((e, d) => {
      if(e) {
        return res.json({code: 1, msg: '服务器出错'})
      }
      const {user, type, _id} =d
      res.cookie('userid', _id)
      return res.json({code: 0, data: {user, type, _id}})
    })
    // User.create(, (e, d) => {
    //   if(e) {
    //     return res.json({code: 1, msg: '服务器出错'})
    //   }
    //   return res.json({code: 0, msg: '注册成功'})
    // })
  })
})

Router.post('/login', (req, res) => {
  const {user, pwd} = req.body
  User.findOne({user, pwd: md5Pwd(pwd)}, _filter, (err, doc) => {
    if(!doc) {
      return res.json({code: 1, msg: '用户不存在或密码错误'})
    }
    res.cookie('userid', doc._id)
    return res.json({code: 0, msg: '登录成功', data: doc})
  })
})

Router.post('/update', (req, res) => {
  const userid = req.cookies.userid
  if(!userid) {
    return res.json({code: 1})
  }

  const body = req.body
  console.log(body)
  User.findByIdAndUpdate(userid, body, (e, d) => {
    const data = Object.assign({}, {
      user: d.user,
      type: d.type
    },body)

    return res.json({code: 0, data})
  })
})

Router.get('/info', (req, res) => {
  const {userid} = req.cookies
  if(!userid) {
    return res.json({code: 1, msg: '登录过期'})
  }
  User.findOne({_id: userid}, _filter, (err, doc) => {
    if(err) {
      return res.json({code: 1, msg: '服务器出错'})
    }
    if(doc) {
      return res.json({code: 0, data: doc})
    }
  })
})

function md5Pwd(pwd) {
  const salt = 'nxy_is_good_3945453sa54!#^LKASD~~~'
  return utils.md5(utils.md5(pwd + salt))
}

module.exports = Router