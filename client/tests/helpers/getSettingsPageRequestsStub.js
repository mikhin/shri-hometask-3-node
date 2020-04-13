const settingsStub = require('../stubs/settings-stub');

module.exports = async () => {
  await page.setRequestInterception(true);
  page.on('request', (interceptedRequest) => {
    if (interceptedRequest.url()
      .endsWith('api/settings')) {
      if (interceptedRequest.method() === 'GET') {
        interceptedRequest.respond({
          status: 200,
          contentType: 'text/plain',
          body: '',
        });
      } else if (interceptedRequest.method() === 'POST') {
        interceptedRequest.respond({
          status: 200,
          contentType: 'text/plain',
          body: JSON.stringify(settingsStub),
        });
      }
    } else {
      interceptedRequest.continue();
    }
  });
};
