const API_AUTH_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1laWRlbnRpZmllciI6IjM4MjU4MzE4IiwiaHR0cDovL3NjaGVtYXMueG1sc29hcC5vcmcvd3MvMjAwNS8wNS9pZGVudGl0eS9jbGFpbXMvbmFtZSI6Im1pa2hpbiIsInVybjpnaXRodWI6bmFtZSI6Ill1cmkgTWlraGluIiwidXJuOmdpdGh1Yjp1cmwiOiJodHRwczovL2FwaS5naXRodWIuY29tL3VzZXJzL21pa2hpbiIsIm5iZiI6MTU4NDE4NDM5NSwiZXhwIjoxNTg2Nzc2Mzk1LCJpc3MiOiJTaHJpLUhvbWV3b3JrIiwiYXVkIjoiU2hyaS1Ib21ld29yayJ9.pxtqCCAUhg7H7-I8mPT9S-O42M14zQpQ23MVu8Wa4f4';
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
