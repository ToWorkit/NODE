// 注意大小写
const Koa = require('Koa');

// 创建一个Koa对象表示web app本身
const app = new Koa();

// 打印日志
app.use(async (ctx, next) => {
  // 打印url
  console.log(`${ctx.request.method}---${ctx.request.url}`);
  // 调用下一个middleware 
  await next();
})

// 时间
app.use(async (ctx, next) => {
  // 当前时间
  const start = new Date().getTime();
  console.log(start);
  // 调用下一个middleware
  await next();
  // 耗费时间
  const ms = new Date().getTime() - start;
  console.log(`Time: ${ms}ms`)
})

// 处理请求， app 将调用异步函数处理请求
/**
 * [description]
 * @param  ctx  由Koa传入 封装了request和response的变量
 * @return {[type]}       [description]
 */
app.use(async (ctx, next) => {
  console.log(11111)
  // koa 传入的将要处理的下一个异步函数
  await next();
  ctx.response.type = 'text/html';
  ctx.response.body = '<h1>Hello Koa</h1>';
})


app.listen(9090);
console.log('app started at port 9090');



