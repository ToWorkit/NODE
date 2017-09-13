// 一个文件流和另一个文件流串起来，实现源文件自动写入目标文件
'use strict'
let fs = require('fs');

let rs = fs.createReadStream('output.txt');
let ws = fs.createWriteStream('data.txt');

rs.pipe(ws)
