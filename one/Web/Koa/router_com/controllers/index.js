let fn_index = async (ctx, next) => {
  ctx.response.body = 
    `
      <h1>Login</h1>
      <form action="/signin" method='post'>
        <p>Name: <input type="text" name="name" value="koa" /></p>
        <p>Password: <input type="password" name="password" /></p>
        <p><input type="submit" value='Submit' /></p>
      </form>
    `;
}

let fn_signin = async (ctx, next) => {
  let name = ctx.request.body.name || '',
      password = ctx.request.body.password || '';
  console.log(`Name: ${name}, Password: ${password}`);
  if (name === 'koa' && password === '111') {
    ctx.response.body = `<h1>Hello ${name}</h1>`;
  } else {
    ctx.response.body =
      `
        <h1>Login failed</h1>
        <p><a href="/">Try Again</a></p>
      `
  }
}

module.exports = {
  'GET /': fn_index,
  'POST /signin': fn_signin
}
