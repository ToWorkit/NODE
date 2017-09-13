// 导出方法
module.exports.sayHi = function () {
  console.log('Hello World');
}
// 导出对象
module.exports.obj = {'a': 1, 'b': 2};

class Person {
  constructor (name) {
    this.name = name;
  }
  eat () {
    console.log(this.name + ' eat');
  }
}
// 导出一个类
module.exports.Person = Person;
