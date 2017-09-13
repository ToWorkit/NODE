let cronJob = require('cron').CronJob;

// 每秒钟执行一次
new cronJob('* * * * * *', () => {
  console.log('每秒钟执行一次，上海时间');
}, null, true, 'Asia/Shanghai');

// 每隔30秒钟执行一次，会在0秒和30秒处执行
new cronJob('*/30 * * * * *', () => {
  console.log('30秒执行一次，上海时间');
}, null, true, 'Asia/Shanghai');

// 早上八点到下午18点，每隔半个小时执行一次，会在0分和30分处执行
new cronJob('* */30 8-18 * * *', () => {
  console.log('每天八点到下午六点，30分执行，上海时间');
}, null, true, 'Asia/Shanghai');

// 每天早上的10点到下午六点的第26分钟各执行一次
new cronJob('* 26 10,18 * * *', () => {
  console.log('每天10点到18点，在26分时执行，上海时间');
}, null, true, 'Asia/Shanghai');
