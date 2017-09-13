/*var express = require('express');
var router = express.Router();

// user 控制层， mvc结构的 c 层
let user_controller = require('../controller/userCtrl');

 GET users listing. 
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/addUser', (req, res, next) => {
  user_controller.add(req, res, next)
})

module.exports = router;
*/

let express = require('express'),
    router = express.Router(),
    // 控制层
    user_controller = require('../controller/userCtrl');

router.post('/login', (req, res, next) => {
  user_controller.login(req, res, next);
})

router.get('/test', (req, res, next) => {
  user_controller.test(req, res, next)
})

module.exports = router;
