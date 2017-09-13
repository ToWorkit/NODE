const crypto = require('crypto');

// 使用md5加密
const hash = crypto.createHash('md5');

// 使用SHA1加密
// const hash = crypto.createHash('sha1')

// 可以多次调用
hash.update('Hello, world!');
hash.update('Hello, nodejs!')

console.log(hash.digest('hex'));
