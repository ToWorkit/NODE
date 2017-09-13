let mysql = require('mysql'),
    conf = require('./db');

// 连接池的方法连接，并将句柄返回
    
module.exports = mysql.createPool(conf.mysql);
