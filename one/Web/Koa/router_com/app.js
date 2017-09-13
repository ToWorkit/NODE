let Koa = require('koa'),
    fs = require('fs'),
    router = require('koa-router')(),
    bodyParser = require('koa-bodyparser'),
    app = new Koa();

// 使用 fs 的 readdirSync 列出文件
// 启动的时候只会执行一次，所以可以使用sync不存在性能问题
let files = fs.readdirSync(__dirname + '/controllers');

// 过滤出 .js 文件
let js_files  = files.filter(f => {
  return f.endsWith('.js')
})

// 处理每个js文件
/*for (let f of js_files) {
  console.log(`process controller: ${f}`);
  // 寻找fs文件
  let mapping = require(__dirname + '/controller/' + f);
  console.log(mapping)
  for (let url in mapping) {
    if (url.startsWith('GET')) {
      // get
      let path = url.substring(4);
      router.get(path, mapping[url]);
      console.log(`register URL mapping: GET ${path}`)
    } else if (url.startsWith('POST')) {
      // post
      let path = url.substring(5);
      router.post(path, mapping[url]);
      console.log(`register URL mapping: POST ${path}`);
    } else {
      // 无效的url
      console.log(`invalid URL: ${url}`);
    }
  }
}*/

function addMapping (router, mapping) {
  for (let url in mapping) {
    if (url.startsWith('GET')) {
      let path = url.substring(4);
      reouter.get(path, mapping[url]);
      console.log(`register URL mapping: GET ${path}`);
    } else if (url.startsWith('POST')) {
      let path = url.substring(5);
      router.post(path, mapping[url]);
      console.log(`register URL mapping: POST ${path}`);
    } else {
      console.log(`invalid URL: ${url}`)
    }
  }
}

// 从controllers目录中找出.js 文件
function addControllers (router) {
  let files = fs.readdirSync(__dirname + '/controllers');
  let js_files = files.filter( f => {
    return f.endsWith('.js')
  })
  for (let f of js_files) {
    console.log(`process controller: ${f}`);
    let mapping = require(__dirname + '/controllers/' + f);
    addMapping(router, mapping);
  }
}

addControllers(router);
