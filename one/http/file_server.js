'use strict'

let fs = require('fs'),
    url = require('url'),
    path = require('path'),
    http = require('http')

// 从命令行参数获取root目录， 默认是当前目录
let root = path.resolve(process.argv[2] || '.')
console.log('Static root dir: ' + root);
// 创建服务器
let server = http.createServer((req, res) => {
  // 获得URL的path， 类型'/js/name.js'
  let pathname = url.parse(req.url).pathname
  // 获得对应的本地文件路径， 类似 'http/js/name.js'
  let filepath = path.join(root, pathname)
  console.log(filepath)
  // 获取文件状态
  fs.stat(filepath, (err, stats) => {
    if (!err && stats.isFile()) {
      // 没有储存并且文件存在
      console.log('200 ----' + req.url)
      // 发送 成功 200 的响应
      res.writeHead(200)
      // 将文件导向res
      // 厉害了
      fs.createReadStream(filepath).pipe(res)
    } else {
      // 出错或者文件不存在
      console.log('404---' + req.url)
      // 发送 404
      res.writeHead(404)
      res.end('404 Not Found')
    }
  })
}).listen(9090)
