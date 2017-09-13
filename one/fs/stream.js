// 文件流读取文本内容
'use strict'
let fs = require('fs');
// 打开一个流
let rs = fs.createReadStream('data.txt', 'utf-8');

// 有数据
rs.on('data', chunk => {
  console.log('DATA')
  console.log(chunk)
});

rs.on('end', () => {
  console.log('END')
})

rs.on('error', err => {
  console.log('ERROR: ' + err)
})
