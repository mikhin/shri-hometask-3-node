const nock = require('nock');

module.exports = (url, stub) => nock('https://hw.shri.yandex/api')
  .post(url)
  .reply(200, JSON.stringify(
    stub,
  ));
