const express = require('express');
const mongoose = require('mongoose');

// 连接mongo
const DB_URL = 'mongodb://127.0.0.1:27017';
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function() {
  console.log('mongo connect successful')
});

// 类似于mysql的表 mongo里有文档、字段的概念
const User = mongoose.model('user',new mongoose.Schema({
  user:{type:String,require:true},
  age:{type:Number,require:true},
}));

// add
// User.create({
//   user:'zrd',
//   age:18
// },function(err,doc) {
//   if(!err){
//     console.log(doc)
//   }else{
//     console.log(err)
//   }
// });

// remove
// User.remove({age:19},function(err,doc) {
//   if(!err){
//     console.log(JSON.stringify(doc)+"|| remove")
//   }else {
//     console.log(err)
//   }
// })



//  新建app
const app = express();

app.get('/',function(err,res) {
  res.send('<h1>Hello Mongoose</h1>')
});

app.get('/data',function(err,res) {
  User.find({},function(err,doc) {
    if(!err){
      res.json(doc)
    }
  })
});
app.get('/one',function(err,res) {
  User.findOne({},function(err,doc) {
    if(!err){
      res.json(doc)
    }
  })
});
app.get('/add',function(err,res) {
  User.create({user:'Jack',age:54},function(err,doc) {
    if(!err){
      console.log(doc);
      res.json(doc);
    }else {
      console.log(err)
    }
  })
})

app.get('/remove',function(err,res) {
  User.remove({user:"Jack"},function(err,doc) {
    if(!err){
      console.log(doc);
      res.json(doc);
    }else {
      console.log(err)
    }
  })
})

app.get('/update',function(err,res) {
  User.update({age:54},{'$set':{age:28}},function(err,doc) {
    if(!err){
      console.log(doc);
      res.json(doc);
    }else {
      console.log(err);
    }
  })
})

app.listen(9090,function() {
  console.log('port 9090 is connecting!')
});