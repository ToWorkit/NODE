let jwt = require('jsonwebtoken');
module.exports = (req, res, next) => {
  let token = req.body.token || req.query.token || req.headers['x-access-token'];
  // 解析 token
  if (token) {
    // 确认 token
    jwt.verify(token, 'HL', (err, decode) => {
      if (err) {
        return res.json({
          success: false,
          message: 'token信息错误'
        });
      } else {
        // 没有问题就把解码后的信息保存到请求中，供后面的路由使用
        req.userinfo = decode;
        next();
      }
    })
  } else {
    // 没有token，则返回错误
    return res.status(403).send({
      success: false,
      message: '没有token'
    })
  }
}
