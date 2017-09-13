let http = require('http'),
    cheerio = require('cheerio');

// 下载网页
function download(url, callback) {
  http.get(url, (res) => {
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    })
    res.on('end', () => {
      callback(data)
    })
  }).on('error', () => {
    callback(null);
  })
}

// 新浪科技
let baseUrl = 'http://tech.sina.com.cn/';
// 从首页开始爬取
download(baseUrl, (data) => {
  if (data) {
    let $ = cheerio.load(data);
    // 一级页面，摘取标题信息
    $('div.nr li a').each((i, e) => {
      let url = $(e).attr('href'),
          text = $(e).text();
      console.log(url);
      console.log(text);
      if (url.indexOf('.shtml') != -1) {
        // 进入二级页面，摘取detail(详情)信息
        download(url, (data2) => {
          if (data2) {
            // cheerio默认会将html转换为实体的
            // 因为content的内容需要入库，所以要将这个参数设置为false，否则会打印乱码
            let $ = cheerio.load(data2, {decodeEntities: false});
            // 修改图片地址
            $('.content img').each((i, e) => {
              let imgUrl = $(e).attr('src');
              if (imgUrl.indexOf('/') === 0) {
                // 说明地址是相对的
                $(e).attr('src', 'http://image.sinajs.cn' + imgUrl);
              }
            });
            // 修改a标签的href内容
            $('.content a').each((i, e) => {
              let hrefContent = $(e).attr('href');
              if (hrefContent) {
                // 替换为空
                $(e).attr('href', 'javascript:void(0);')
              }
            })
            console.log($('.content').html());
          }
        })
      }
    })
    console.log('done')
  } else {
    console.log('error')
  }
})
