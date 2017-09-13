let express = require('express'),
    app = express();

app.get('/', (req, res, next) => {
  res.send('Hello World');
});

// 请求_01
app.get('/one', (req, res, next) => {
  setTimeout(() => {
    // res.send('请求_01 完成');
    res.json({
      code:200,
      userid:123
    });
  }, 1000);
});

// 请求_02
app.get('/two', (req, res, next) => {
  let param = req.query || req.params,
      userid = param.userid
  setTimeout(() => {
    res.json({
      code:200,
      userid,
      ssoid:456
    });
  }, 2000);
});

// 请求_03
app.get('/three', (req, res, next) => {
  let param = req.query || req.params;
  let {userid, ssoid} = param;
  setTimeout(() => {
    res.json({
      code: 200,
      userid,
      ssoid,
      message: 'three 请求成功 完成操作'
    })
  }, 3000)
});

app.listen(3000, () => console.log(3000));
