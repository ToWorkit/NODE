// PhantomJS不支持箭头函数，如（）=> {}。
var phantom = require('phantom');
var fs = require('fs');

//下载网页
var url = 'https://search.jd.com/Search?keyword=%E7%94%B5%E9%A5%AD%E7%85%B2%E8%87%AA%E8%90%A5&enc=utf-8&qrst=1&rt=1&stop=1&spm=2.1.0&vt=2&offset=5&stock=1&page=1&s=1&click=0';
var pageNo = 1;
var maxPage = 17;

function open_page(page, ph, url) {
 url = url + '&page=' + pageNo;

 page.open(url).then(function (status) {

  console.log(status);
  setTimeout(function () {
   var ua = page.evaluate(function () {
     var listdata = [];
     //京东引入了jquery库，灰常方便的使用jq的选择器即可！
     $('ul.gl-warp li').each(function () {
       var obj = {};
       obj.title = $(this).find('.p-name em').text();
       obj.price = $(this).find('.p-price i').text();
       obj.comment = $(this).find('.p-commit a').text();
       listdata.push(obj);
      });
      return listdata;
     });

    ua.then(function (data) {
   //遍历数据
     for (var i = 0; i < data.length; i++) {
       fs.writeFileSync('data.txt', data[i]['title'] + '--' +data[i]['price']+ '--' +data[i]['comment'] + '\r\n', {flag: 'a'});
     }
    });

   }, 1000);
   pageNo = pageNo + 2;
   if (pageNo <= maxPage) {
     //递归抓取所有信息
     open_page(page, ph, url);
   } else {
     //抓取完成，关闭页面
     ph.exit();
   }
 });
}

phantom.create().then(function (ph) {
 ph.createPage().then(function (page) {
 //入口
  open_page(page, ph, url);
 });
});
