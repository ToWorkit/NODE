// 引入模块
let o = require('./foo.js');
// 使用
o.sayHi();
console.log(o.obj.a);

let p = new o.Person('PL');
p.eat();
