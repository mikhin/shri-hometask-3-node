require('dotenv').config();

const API_AUTH_KEY = process.env.APIKEY;
const API_BASE_URL = 'https://hw.shri.yandex/api';

const https = require('https');
const axios = require('axios');

const axiosRequest = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${API_AUTH_KEY}`,
    'Content-Type': 'application/json',
  },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

module.exports = axiosRequest;
