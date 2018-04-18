const mongoose = require('mongoose');

// 连接mongo
const DB_URL = 'mongodb://127.0.0.1:27017';
mongoose.connect(DB_URL);
mongoose.connection.on('connected',function() {
  console.log('mongo connect successful')
});