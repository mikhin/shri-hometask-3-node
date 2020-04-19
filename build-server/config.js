require('dotenv').config();

module.exports = {
  port: 4000,
  baseUrl: 'https://hw.shri.yandex/api',
  apikey: process.env.APIKEY,
};
