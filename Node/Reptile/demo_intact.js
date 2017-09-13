let http = require('http'),
    cheerio = require('cheerio');

// 下载网页
function download (url, callback) {
  http.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => {      
      data += chunk
    })
    res.on('end', () => {
      callback(data)
    })
  }).on('error', () => {
    callback(null)
  })
}

let baseUrl = 'http://www.mimito.com.cn'; // 女人街
// 从首页开始爬取
download(baseUrl, (data) => {
  if (data) {
    let $ = cheerio.load(data);
    // 一级页面， 摘取标题信息
    $('li a').each((i, e) => {
      let url = $(e).attr('href'),
          text = $(e).text();
      console.log(url);
      console.log(text);
      if (url.indexOf('.html') != -1) {
        // 二级页面，摘取detail(详情)信息
        download(url, (data2) => {
          if (data2) {
            let $ = cheerio.load(data2);
            console.log($('.content').html());
          }
        })
      }    
    })
    console.log('done')
  } else {
    console.log('error')
  }
});

