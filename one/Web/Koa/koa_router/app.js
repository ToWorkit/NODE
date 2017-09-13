const Koa = require('koa'),
      // require('koa-reouter') 返回的是一个函数, 调用下再用
      router = require('koa-router')(),
      app = new Koa();

// 打印url
app.use(async (ctx, next) => {
  console.log(`Process ${ctx.request.method} -------- ${ctx.request.url}`);
  await next();
})

// 添加路由
router.get('/hello/:name', async (ctx, next) => {
  // 参数
  let name = ctx.params.name;
  // 发送
  ctx.response.body = `<h1>Hello, ${name}</h1>`;
});

router.get('/', async (ctx, next) => {
  ctx.response.body = `<h1>Index</h1>`;
});

// 使用路由
app.use(router.routes());

app.listen(9090);
console.log('app started at port 9090')
