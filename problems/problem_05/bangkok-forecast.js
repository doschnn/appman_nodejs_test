const axios = require('axios');
const moment = require('moment');

const bangkokForecast = () => {
  // put your code here !!
  const url = 'http://api.openweathermap.org/data/2.5/forecast?q=Bangkok&cnt=7&appid=827cd2e1884ee5abce2531495a25e346'
  return new Promise((resolve) => {
    resolve(axios.get(url));
  }).then(response => {
    const { list } = response.data;
    return list.map((element) => {
      return {
        date: element.dt_txt.split(' ')[0],
        minTemp: element.main.temp_min,
        maxTemp: element.main.temp_max
      }
    });
  });
};

module.exports = { bangkokForecast };
