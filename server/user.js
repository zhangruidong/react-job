const express = require('express')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')




Router.post('/register',function(req,res) {
  // console.log(req.body)
  const {user,pwd,type} = req.body
  // console.log(req.body)
  User.findOne({user:user},function(err,doc) {
    if(!err) {
      return res.json({code:1})
    }
  })
})



Router.get('/info',function(req,res) {
  console.log('req')
  return User.findOne({user:'zrd'},function(err,doc) {
    if(!err){
      res.json(doc)
    }
  })
})

module.exports = Router