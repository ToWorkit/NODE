let express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    users = require('./routes/users'),
    fs = require('fs');
    app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
// 静态开放
app.use(express.static(path.join(__dirname, 'public')));
app.use('/users', users);
app.get('/list', (req, res) => {
  fs.readFile('./public/views/list.html', 'utf-8', (err, data) => {
    res.send(data);
  })
})
app.use((req, res, next) => {
  let err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  fs.readFile('./public/views/login.html', 'utf-8', (err, data) => {
    res.send(data);
  })
});

module.exports = app;

