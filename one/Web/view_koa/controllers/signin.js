module.exports = {
  'POST /signin': async (ctx, next) => {
    let email = ctx.request.body.email || '',
        password = ctx.request.body.password || '';
    if (email === 'admin' && password === 'admin') {
      console.log('signin ok')
      ctx.render('signin_ok.html', {
        title: 'Sign in ok',
        name: 'Mr Node'
      });
    } else {
      console.log('signin failed');
      ctx.render('signin_failed.html', {
        title: 'Sign in failed'
      });
    }
  }
};
