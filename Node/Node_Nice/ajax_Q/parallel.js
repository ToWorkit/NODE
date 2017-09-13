/* 并行 */
let Q = require('q'),
    request = require('request'),
    urls = [
      'http://localhost:3000/one',
      'http://localhost:3000/two',
      'http://localhost:3000/three',
      'http://localhost:3001/four', // 错误地址
    ],
    createPromise = (url) => {
      let deferred = Q.defer();
      request(url, (err, response, body) => {
        console.log('requested' + url);
        if (err) {
          deferred.reject(err); // 错误返回
        } else {
          deferred.resolve(body); // 成功返回
        }
      });
      return deferred.promise; // 返回一个promise对象
    },
    promise = urls.map((url) => {
      return createPromise(url);
    })

Q.allSettled(promise).then((results) => {
  console.log(results);
  results.forEach((result) => {
    // 完成
    if (result.state === 'fulfilled') {
      console.log(result.value);
    } else {
      console.log(result.reason);
    }
  })
})
