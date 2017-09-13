'use strict'
let fs = require('fs');

let data = 'Hello World And You';

// 异步写入
/*fs.writeFile('output.txt', data, err => {
  if (err) {
    console.log(err)
  } else {
    console.log('oK')
  }
})*/

// 同步写入
fs.writeFileSync('output.txt', data)
