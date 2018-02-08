const axios = require('axios');

const BASE_URL = 'https://coinbin.org/'

const cryptoDetails = (symbols = []) => {
  // put your code here !!
 return new Promise((resolve) => {
   resolve(axios.get(BASE_URL + 'coins'));
 }).then(response => {
    const { coins } = response.data;
    return symbols.map(s => coins[s]);
  });
};

module.exports = { cryptoDetails };
