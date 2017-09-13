var express = require('express');
var router = express.Router();
let auth = require('../middleware/auth');

// 控制层
let user_controller = require('../controller/userCtrl');
// 登录认证
router.post('/auth', (req, res, next) => {
  user_controller.auth(req, res, next);
});
// 列表页
router.get('/list', auth, (req, res, next) => {
  // 从解析的token里面拿到用户信息，然后查询数据库，返回信息
  res.json({
    name: req.userinfo.name,
    items: [
      {
        id: 1,
        title: 'test_01'
      },{
        id: 2,
        title: 'test_02'
      }
    ]
  })
})

module.exports = router;
