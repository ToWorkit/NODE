const Koa = require('koa'),
      bodyParser = require('koa-bodyparser');
      router = require('koa-router')(),
      app = new Koa();

router.get('/', async (ctx, next) => {
  ctx.response.body = 
    ` <h1>Index</h1>
      <form action="/signin" method="post">
        <p>Name: <input type="text" name="name" value="koa" /></p>
        <p>Password: <input type="password" name="password" /></p>
        <p><input type="submit" value='Submit' /></p>
      </form>
    `;
});

// 处理post请求
router.post('/signin', async (ctx, next) => {
  var name = ctx.request.body.name || ' ',
      password = ctx.request.body.password || ' ';
  console.log(`Signin with name: ${name}, password: ${password}`);
  if (name === 'koa' && password === '123') {
    ctx.response.body = `<h1>Welcome, ${name}</h1>`;
  } else {
    ctx.response.body = 
      ` <h1>Login Failed</h1>
        <p><a href="/">Try Again</a></p>
      `;
  }
});

// 处理post提交的数据，需要放在router之上
app.use(bodyParser());
app.use(router.routes());
app.listen(9090);
console.log('Started at port 9090')
