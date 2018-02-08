const { readFileSync } = require('fs');
const logFilePath = __dirname + '/data-usage.log';

const raw = readFileSync(logFilePath, 'utf8');

const dataUsage = () => {
  // put your code here !!
  let list = raw.split('\n');
  let x = {}
  const result = list.map((l) => {
    const detail = l.split(',');
    const username = detail[1].split('user=')[1];
    const data = parseInt(detail[2].split('data=')[1]);
    if(!x[username]) {
      x[username]={total: data} 
    } else {
      x[username].total += data;
      x[username].count++;
    }
  });
  const all = Object.keys(x).map((key) => {
    return {
      username: key,
      total: x[key].total,
      average: x[key].total/x[key].count
    }
  });
  return all;
};

module.exports = { dataUsage };
