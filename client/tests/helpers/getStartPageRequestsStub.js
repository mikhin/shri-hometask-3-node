module.exports = async () => {
  await page.setRequestInterception(true);
  page.on('request', (interceptedRequest) => {
    if (interceptedRequest.url()
      .endsWith('api/settings')) {
      interceptedRequest.respond({
        status: 200,
        contentType: 'text/plain',
        body: '',
      });
    } else {
      interceptedRequest.continue();
    }
  });
};
