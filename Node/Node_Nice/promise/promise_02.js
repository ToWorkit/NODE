let request = require('request');
let urls = [
  'http://localhost:3000/one',
  'http://localhost:3000/two',
  'http://localhost:3000/three',
];

let createPromise = (url) => {
  // 回调函数
  let callback = (resolve, reject) => {
    request(url, (err, response, body) => {
      if (err) {
        reject(err); // 错误返回
      } else {
        resolve(body); // 成功返回
      }
    })
  }
  // 布置任务
  let promise = new Promise(callback);
  // 返回 promise 对象
  return promise;
}

// 第一个请求的回调
let callback_Request_01 = (data) => {
  data = JSON.parse(data);
  console.log(data);
  let userid = data.userid,
      url = urls[1] + '?userid=' + userid;
  return createPromise(url);
}
// 第二个请求的回调
let callback_Request_02 = (data) => {
  data = JSON.parse(data);
  console.log(data);
  let userid = data.userid,
      ssoid = data.ssoid,
      url = `${urls[2]}?userid=${userid}&ssoid=${ssoid}`;
  return createPromise(url);    
}
// 剥离业务逻辑
createPromise(urls[0]).then((data) => {
  console.log('第一次请求');
  return callback_Request_01(data);
}).then((data) => {
  console.log('第二次请求');
  return callback_Request_02(data);
}).then((data) => {
  // 打印最终结果
  console.log('第三次请求');
  console.log(data);
})
