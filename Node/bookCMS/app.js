let express = require('express'),
    path = require('path'),
    // cookie 中间件
    cookieParser = require('cookie-parser'),
    // session 中间件
    session = require('express-session'),
    // post 解析
    bodyParser = require('body-parser'),
    // 路由
    users = require('./routes/users'),
    app = express();

// 配置 session 和 cookie
app.use(cookieParser('sessiontest'));
app.use(session({
  secret: 'sessiontest', // 需要与cookieParser的名称一致
  resave: true,
  saveUninitialized: true
}));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/users', users);

// catch
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err)
})

// error handle
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.send('login.html');
})

module.exports = app;












































/*var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');

// cookie 中间件
var cookieParser = require('cookie-parser'); 
// session 中间件
var bodyParser = require('body-parser');
// post 解析
let bodyParser = require('body-parser');

var index = require('./routes/index');
// 路由
var users = require('./routes/users');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
*/
