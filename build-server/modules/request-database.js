const https = require('https');
const axios = require('axios');
const config = require('../config');

const API_AUTH_KEY = config.apikey;
const API_BASE_URL = config.baseUrl;

const requestDatabase = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer ${API_AUTH_KEY}`,
    'Content-Type': 'application/json',
  },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

module.exports = requestDatabase;
