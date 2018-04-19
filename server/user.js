const express = require('express')
const utils =require('utility')
const Router = express.Router()
const model = require('./model')
const User = model.getModel('user')
const _filter = {'pwd':0,'__v':0}




Router.post('/register',function(req,res) {
  const {user,pwd,type} = req.body
  User.findOne({user:user},function(err,doc) {
    if(!err && doc) {
      return res.json({code:1,msg:'用户名重复'})
    }else {
      const userModel =new User({user,type,pwd:utils.md5(pwd)})
      userModel.save(function(err,doc) {
        if(err){
          return res.json({code:1,msg:'后端出错了'})
        }
        const {user,type,__id} = doc
        res.cookie('userid', __id)
        return res.json({code:0,data:{user,type,__id}})
      })
      
      User.create({user,type,pwd:utils.md5(pwd)},function(err,doc) {
        if(err){
          return res.json({code:1,msg:'后端出错了'})
        }
        return res.json({code:0})
      })
    }
  })
})

Router.post('/login',function(req,res) {
  const {user,pwd} = req.body
  User.findOne({user,pwd:utils.md5(pwd)},_filter,function(err,doc) {
    if(!err && doc) {
      res.cookie('userid',doc.id)
      return res.json({code:0,data:doc})
    }else {
      return res.json({code:1,msg:'用户名或密码错误'})
    }
  })
})


Router.get('/list',function(req,res) {
  console.log('req')
  User.find({},function(err,doc) {
    if(!err){
      return res.json(doc)
    }
  })
})

Router.get('/remove',function(req,res) {
  User.remove({},function(err,doc) {
    if(!err){
      return res.json(doc)
    }
  })
})

Router.get('/info',function(req,res) {
  console.log('req')
  const {userid} = req.cookies
  if(!userid) {
    return res.json({code:1,msg:'后端出错了'})
  } else {
    User.findOne({user:'zrd'},_filter,function(err,doc) {
      if(!err){
        return res.json({code:0,data:doc})
      }
    })
  }
  
})

module.exports = Router