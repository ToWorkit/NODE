let http = require('http'),
    cheerio = require('cheerio'),
    fs = require('fs');

// 下载网页
function download(url, callback) {  
  http.get(url, (res) => {
    // 必须设置response的编码为binary(二进制), 传输都是以binary的方式进行传输的
    res.setEncoding('binary');
    let data = '';
    res.on('data', (chunk) => {
      data += chunk;
    })
    res.on('end', () => {
      callback(data);
    })
  }).on('error', () => {
    callback(null);
  })
}
// 保存文件
function keepFile(fileUrl) {
  let index = fileUrl.lastIndexOf("/"); //  最后一个 / 后面是文件名
  // 对方图片加了防爬，需要处理图片后缀后面的障碍
  let fileName = fileUrl.substring(index + 1).split('?')[0]; // 获取文件名
  // 下载图片
  download(fileUrl, (data) => {
    // 写入文件
    // 目录 文件名
    fs.writeFileSync('./download/' + fileName, data, "binary");
  })
}

// url
let baseUrl = 'http://www.quanjing.com';
// 从首页开始
download(baseUrl, (data) => {
  if (data) {
    let $ = cheerio.load(data);
    $('.tabCon img').each((i, e) => {
      if ($(e).attr('src').indexOf('/') === 0) {
        fileUrl = baseUrl + $(e).attr('src');
      } else {
        fileUrl = baseUrl + '/' + $(e).attr('src');
      }
      // 每次爬取到图片就将图片数据保存
      console.log(fileUrl)
      keepFile(fileUrl);
    })
    console.log('done');
  } else {
    console.log('error')
  }
})

