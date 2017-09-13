'use strict'

let http = require('http'),
// url 对象
    url = require('url'),
// 处理本地文件目录
    path = require('path');

// 解析当前目录
let workDir = path.resolve('.');        

// 组合完整的文件路径， 当前目录 + 名
// let filepath = path.join(workDir, 'pub', 'index.html')

let server = http.createServer((req, res) => {
  // 请求方法和地址
  console.log(req.method + '---' + req.url)
  // 设置响应头
  res.writeHead(200, {'Content-Type': 'text/html'})
  // 响应内容
  res.end('<h1>Hello World</h1>')
}).listen(8080)
console.log(8080)
console.log(url.parse('http://user:pass@host.com:8080/path/to/file?query=string#hash'))
console.log(workDir)
