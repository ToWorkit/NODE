const crypto = require('crypto');

// 需要 秘钥
const hmac = crypto.createHmac('sha256', 'secret-key');

hmac.update('Hello, world!')

console.log(hmac.digest('hex'))
