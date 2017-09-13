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

// 声明 async 函数， 返回的一定是promise对象
async function doIt(){
  // 第一个请求任务
  let data_userid = await createPromise(urls[0]); 
  // 解析成对象
  data_userid = JSON.parse(data_userid); 
  // 获取userid
  let userid = data_userid.userid; 
  // 第二个请求任务
  let data_ssoid = await createPromise(`${urls[1]}?userid=${userid}`);
  // 解析对象
  data_ssoid = JSON.parse(data_ssoid);
  // 获取ssoid
  let ssoid = data_ssoid.ssoid;
  // 第三个请求任务
  let result = await createPromise(`${urls[2]}?userid=${userid}&ssoid=${ssoid}`);
  // 返回 promise 对象
  return result;
}
// 最终执行
doIt().then((data) => {
  console.log(data);
}).catch((err) => {
  console.log(err)
})
