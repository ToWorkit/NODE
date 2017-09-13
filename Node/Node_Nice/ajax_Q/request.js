let Q = require('q'),
    request= require('request');

let createPromise = (url) => {
  let deferred = Q.defer(); // 创建任务
  request(url, (err, response, body) => {
    console.log('requested' + url);
    if (err) {
      deferred.reject(err); // 错误返回
    } else {
      deferred.resolve(body); // 成功返回
    }
  });
  return deferred.promise; // 返回一个promise对象
}

createPromise('http://localhost:3000/one').then((data) => {
  console.log(data);
}, (err) => {
  console.error(err);
});

