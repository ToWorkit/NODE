let phantom = require('phantom');
phantom.create().then((ph) => { // 创建沙箱
  ph.createPage().then((page) => { // 创建page容器
    page.open('http://localhost:3000/test.html').then((status) => { // 打开url地址
      console.log(status);
      setTimeout(() => {
         // promise
          let ua = page.evaluate(() => {
            return document.getElementById('userid').innerHTML;
          });
          ua.then((content) => {
            console.log('contnet', content);
          })

          ph.exit();
      }, 3000)
    })
  })
})
