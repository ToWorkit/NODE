var express = require('express');
var router = express.Router();

let user_controller = require('../controller/userCtrl');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/addMessage', (req, res, next) => {
  user_controller.addMessage(req, res, next);
})

module.exports = router;
