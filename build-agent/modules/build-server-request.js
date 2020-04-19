const axios = require('axios');
const config = require('../config');

const API_BASE_URL = `http://${config.serverHost}:${config.serverPort}`;

const databaseRequest = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

module.exports = databaseRequest;
