let request = require('request');

// 回调函数
let callback = (resolve, reject) => {
  let url = 'http://localhost:3000/one';
  request(url, (err, response, body) => {    
    if (err) {
      reject(err); // 错误返回
    } else {
      resolve(body); // 成功返回
    }
  })
}

// 布置一项任务
let promise = new Promise(callback);
// 执行任务
promise.then((data) => {
  // 正确响应
  console.log(data);
}).catch((err) => {
  // 捕获错误信息
  console.log(`error info: ${err}`)
})
