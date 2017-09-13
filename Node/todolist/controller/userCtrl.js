let pool = require('../conf/conn'),
    user_model = require('../model/userModel');

module.exports = {
  addMessage(req, res) {
    pool.getConnection((err, connection) => {
      let param = req.body,
          now = Date.parse(new Date()) / 1000; // 生成时间戳，截止到秒
      connection.query(user_model.insert, [param.phone, param.content, now], (err, result) => {
        console.log(result);
        res.json({
          code: 200,
          msg: 'success'
        });
        connection.release();
      })    
    })
  }
}    
