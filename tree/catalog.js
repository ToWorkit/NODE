/**
 * 用于生成文件目录
 * 结构如下
 * ├── build                                       // webpack配置文件
 * ├── config                                      // 项目打包路径
 * ├── dist                                        // 上线项目文件，放在服务器即可正常访问
 * ├── screenshots                                 // 项目截图
 * ├── src                                         // 源码目录
 * │    └──── components                           // 组件
 * └── aaa                                         // 文件
 */


var path = require('path')
var fs = require('fs')
var root = '../src'


function readdir(dir, level) {
  try {
    return fs.readdirSync(dir).map((val, i, arr) => {
      var current = dir + '/' + val
      return {
        name: val,
        isLast: i === arr.length - 1,
        level,
        children: readdir(current, level + 1)
      }
    })
  } catch (error) {
    return false
  }
}

var dir = readdir(root, 1)

var str = ''
function formatDir(dir, tab) {
  dir.forEach(val => {
    if (val.isLast) {
      row = tab + '└── ' + val.name
    } else {
      row = tab + '├── ' + val.name
    }
    if (row.length < 50) {
      row += ' '.repeat(50 - row.length)
    } else {
      row += '\r\n' + tab + ' '.repeat(50 - tab.length)
    }
    str += row + '//\r\n'
    if (val.children) {
      formatDir(val.children, tab + (val.isLast ? '    ' : '│   '))
    }
  })
}
formatDir(dir, '')

console.log(str)
fs.writeFileSync('./tree.txt', str)
