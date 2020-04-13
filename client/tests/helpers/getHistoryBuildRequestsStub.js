const settingsStub = require('../stubs/settings-stub');
const buildsStub = require('../stubs/builds-stub');
const buildStub = require('../stubs/build-stub');

module.exports = async () => {
  await page.setRequestInterception(true);
  page.on('request', (interceptedRequest) => {
    if (interceptedRequest.url()
      .endsWith('api/settings')) {
      interceptedRequest.respond({
        status: 200,
        contentType: 'text/plain',
        body: JSON.stringify(settingsStub),
      });
    } else if (interceptedRequest.url()
      .endsWith('api/builds')) {
      interceptedRequest.respond({
        status: 200,
        contentType: 'text/plain',
        body: JSON.stringify(buildsStub),
      });
    } else if (interceptedRequest.url()
      .endsWith('api/builds/255c8ba3-cd64-4ea6-aac0-ae8bd9e8b24c')) {
      interceptedRequest.respond({
        status: 200,
        contentType: 'text/plain',
        body: JSON.stringify(buildStub),
      });
    } else if (interceptedRequest.url()
      .endsWith('api/builds/255c8ba3-cd64-4ea6-aac0-ae8bd9e8b24c/logs')) {
      interceptedRequest.respond({
        status: 200,
        contentType: 'text/plain',
        body: 'LOG LOL',
      });
    } else if (interceptedRequest.url()
      .endsWith('api/builds/491cef8319881d6e18942ca0615a01384eaaab48')) {
      interceptedRequest.respond({
        status: 200,
        contentType: 'text/plain',
        body: JSON.stringify(buildStub),
      });
    } else if (interceptedRequest.url()
      .endsWith('/api/builds/notrealcommithash')) {
      interceptedRequest.respond({
        status: 500,
        contentType: 'text/plain',
        body: JSON.stringify({ message: 'Commit does not exist' }),
      });
    } else {
      interceptedRequest.continue();
    }
  });
};
