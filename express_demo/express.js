let fs = require('fs')
let request = require('request')
let express = require('express')
let template = require('art-template')

let app = express()

// 主页面
app.get('/',(req, res) => {
    // 读取模板
    fs.readFile('./views/template.html', 'utf8', (err, tplData) => {
      if(err) {
        return err
      }
      // 获取数据
      request('http://ww.yueloo.com:8099/CORS/v1.0/?book_id=2', (err, response, data) => {
        if(!err && response.statusCode === 200) {
          // 处理数据
          data = JSON.parse(data)
          let msg = data.data
          // 模板解析渲染
          let htmlStr = template.compile(tplData)(msg)
          // 发送到浏览器
          res.end(htmlStr)
        }
      })
    })
})
// text 路由页面
app.get('/text', (req, res) => {
  // 可以读取HTML页面直接渲染
  res.send('TEXT')
})
// 端口监控
app.listen(9090)
