'use strict'
let fs = require('fs');

// 读取文本
/*fs.readFile('data.txt', 'utf-8', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
  }
})*/

// 读取图片
/*fs.readFile('girl.jpg', (err, data) => {
  if (err) {
    console.log(err)
  } else {
    console.log(data)
    console.log(data.length + 'bytes')
    // 读取出来的是Buffer对象，将其转为string
    /*let text = data.toString('utf-8');
    console.log(text)
    // 将 Buffer 转为 string
    let buf = new Buffer('你好', 'utf-8');
    console.log(buf)
  }
})*/

// fs同步读取文件
try {
  let data = fs.readFileSync('data.txt', 'utf-8');
  console.log(data)
} catch (err) {
  console.log(err.message)
}


