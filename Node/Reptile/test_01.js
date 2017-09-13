let cheerio = require('cheerio')
// 加载一个html
let $ = cheerio.load('<h2 class="title">Hello World</h2>')
// cheerio 相当于 jquery，用法是一样的
$('h2.title').text('Hello Cheerio')
$('h2').addClass('welcome')
console.log($.html())
