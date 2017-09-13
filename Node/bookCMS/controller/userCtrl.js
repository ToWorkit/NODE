let pool = require('../conf/conn');

// 返回JSON
let callback = (res, ret) => {
  if (typeof ret === 'undefined') {
    res.json({
      code: '-1',
      msg: '操作失败'
    });
  } else {
    res.json(ret)
  }
};

module.exports = {
  login() {
    let param = req.body;
    // 假设用户名及密码，实际需要数据库数据
    let user = {
      name: 'hello',
      passwd: 'world'
    }
    // 验证通过
    if (param.username === user.name && param.password === user.passwd) {
      // 存储session，并将sessionID写回到客户端
      req.session.user = user;
      callback(res, {code: 200, msg: 'success'});
    }
  },
  test(req, res) {
    // 验证是否有了session
    let userInfo = req.session.user;
    console.log(res);
    callback(res, {code: 200, msg: 'Hello World'})
  }
}

/*module.exports = {
  // 添加数据的方法
  add(req, res) {
    // 获取连接
    pool.getConnection((err, connection) => {
      // 获取页面传过来的参数
      let param = req.query || req.params;
      // 执行插入语句
      connection.query(uer_model.insert, [param.name, param.age], (err, result) => {
        if (result) {
          result = {
            code: 200,
            msg: '成功增加一条数据'
          }；
        }
        // 返回结果
        callback(res, result)
        // 释放连接
        connection.release
      })
    })
  }
}    
*/
