import axios from 'axios';
import moment from 'moment';

const bangkokForecast = async () => {
  // put your code here !!
  const url = 'http://api.openweathermap.org/data/2.5/forecast?q=Bangkok&cnt=7&appid=827cd2e1884ee5abce2531495a25e346'
  await axios.get(url) 
  .then(response => {
    const { list } = response.data.list;
    return list.map((element) => {
      return {
        date: moment(element.dt).format('YYYY-MM-DD'),
        minTemp: element.main.temp_min,
        maxTemp: element.main.temp_max
      }
    });
  });
};

module.exports = { bangkokForecast };
