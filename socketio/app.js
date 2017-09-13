// 引入程序所需要的包
const express = require('express'),
      path = require('path'),
      app = express(),
      server = require('http').createServer(app),
      io = require('socket.io').listen(server);

// 默认输出所有日志      
io.set()

// websocket 连接监听
io.on('connection', socket => {
  //  通知客户端已连接
  socket.emit('已连接');

  // message 事件监听
  
})
