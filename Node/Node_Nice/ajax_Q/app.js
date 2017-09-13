let express = require('express'),
    app = express();

app.get('/', (req, res, next) => {
  res.send('Hello World');
});

// 请求_01
app.get('/one', (req, res, next) => {
  setTimeout(() => {
    res.send('请求_01 完成');
  }, 1000);
});

// 请求_02
app.get('/two', (req, res, next) => {
  setTimeout(() => {
    res.send('请求_02 完成');
  }, 2000);
});

// 请求_03
app.get('/three', (req, res, next) => {
  setTimeout(() => {
    res.send('请求_03 完成')
  }, 3000)
});

app.listen(3000, () => console.log(3000));
