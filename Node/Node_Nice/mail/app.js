let nodemailer = require('nodemailer'),
    smtpTransport = require('nodemailer-smtp-transport'),
    cronJob = require('cron').CronJob;

// 开启一个 SMTP 连接池
let transport = nodemailer.createTransport(smtpTransport({
  // 主机
  host: 'smtp.163.com',
  // 使用SSL
  secure: false,
  // 使用 SSL
  secureConnection: false,
  // 网易的SMTP端口
  port: 25, 
  auth: {
    user: '18220320524@163.com', // 账号
    pass: 'xiamu7', // 授权码
  }
}));
// 设置邮件内容
let mailOptions = {
  from: '18220320524<18220320524@163.com>', // 发件人地址
  to: '418086942@qq.com', // 收件人列表，可以使用逗号隔开添加多个
  subject: 'Happy every day', // 标题
  // 邮件内容可以自定义样式
  html: '<strong style="color: red">测试"邮件轰炸机"</strong>'
}
/*// 发送邮件
transport.sendMail(mailOptions, (error, response) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Message Send Ok");
  }
  // 没啥用就关闭连接池
  transport.close();
})*/

// 定时发送邮件
new cronJob('*/10 * * * * *', () => {
  transport.sendMail(mailOptions, (error, response) => {
    if (error) {
      console.error(error)
    } else {
      console.log('Message Send Ok')
    }
    // 关闭连接池
    transport.close();
  })
}, null, true, 'Asia/Shanghai');
