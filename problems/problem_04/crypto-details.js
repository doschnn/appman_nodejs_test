import axios from 'axios';

const BASE_URL = 'https://coinbin.org/'

const cryptoDetails = async (symbols = []) => {
  // put your code here !!
  await axios.get(BASE_URL + 'coins') 
  .then(response => {
    const { coins } = response.data;
    return symbols.map(s => coins[s]);
  });
};

module.exports = { cryptoDetails };
