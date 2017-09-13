let http = require('http'),
    cheerio = require('cheerio');

// 下载网页
function download(url, callback) {
  http.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    });
    res.on('end', () => {
      callback(data);
    });
  }).on('error', () => {
    callback(null);
  })
}

// url
let baseUrl = 'http://www.quanjing.com';
download(baseUrl, (data) => {
  if (data) {
    let $ = cheerio.load(data);
    $('.tabCon img').each((i, e) => {
      // console.log($(e).attr('src')); // 打印出来的是相对地址
      // 有些含有 / , 有些不含有
      let fileUrl = null;
      if($(e).attr("src").indexOf("/") === 0){
       fileUrl = baseUrl + $(e).attr("src");
      }else{
       fileUrl = baseUrl + "/" + $(e).attr("src");
     }
      console.log((fileUrl));
    });
    console.log('done')
  } else {
    console.log('error')
  }
})
