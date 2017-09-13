var phantom = require('phantom');

//下载网页
var url = 'https://item.jd.com/1135611.html';

phantom.create().then(function (ph) {
 ph.createPage().then(function (page) {
   page.open(url).then(function (status) {
     console.log(status);
     setTimeout(function(){
        //这是个promise
       var ua = page.evaluate(function () {
          //京东引入了jquery库，灰常方便的使用jq的选择器即可！
          return $('.price').text();
       });
       ua.then(function (price) {
          console.log('price:', price);
       });
       ph.exit();
      },3000);
   })
 });
});
