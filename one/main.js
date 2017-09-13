'use strict'
/*// 引入hello模块
let greet = require('./hello')
let s = 'Ms';
greet(s);
*/

process.nextTick(() => console.log('nextTick callback')); 
console.log('nextTick was set'); // 先执行
