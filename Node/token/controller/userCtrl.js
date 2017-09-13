let jwt = require('jsonwebtoken');
module.exports = {
  auth (req, res) {
    let param = req.body;
    // 此处应该从数据库中拉取数据，现在只是模拟
    let user = {
      name: 'hello',
      passwd: '123'
    };
    // 验证提交的数据
    if (param.username == user.name && param.password == user.passwd) {
      // 秘钥
      let jwtTokenSecret = 'HL';
      // 生产token
      let token = jwt.sign(user, jwtTokenSecret, {
        expiresIn: 3600 // 设置过期时间， 单位秒
      });
      res.json({
        status: 200,
        message: 'success',
        token: token
      })
    } else {
      res.status(401).send({
        message: '认证失败'
      })
    }
  }
}
