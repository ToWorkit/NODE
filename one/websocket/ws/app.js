// 导入WebSocket 模块
const WebSocket = require('ws');

// 引用Server类
const WebSocketServer = WebSocket.server;

// 实例化
const wss = new WebSocketServer ({
  port: 3000
})
