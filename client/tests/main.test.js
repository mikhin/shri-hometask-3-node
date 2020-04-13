const getStartPageRequestsStub = require('./helpers/getStartPageRequestsStub');
const getHistoryBuildRequestsStub = require('./helpers/getHistoryBuildRequestsStub');

describe('Главная страница', () => {
  beforeEach(async () => {
    await page.close();
    page = await context.newPage();
  });

  describe('Настройки репозитория отсутствуют', () => {
    beforeEach(async () => {
      getStartPageRequestsStub();
      await page.goto('http://localhost:3000');
    });

    it('Отображается приветственный экран', async () => {
      await page.waitForSelector('.welcome-action__description');
    });

    it('Клик по кнопке «Настройки», отображается страница настроек', async () => {
      page.click('.welcome-action__action');
      await page.waitForNavigation({ waitUntil: 'load' });
      await page.waitForSelector('.settings-layout');
    });
  });

  it('Настройки репозитория присутствуют, отображается список билдов', async () => {
    getHistoryBuildRequestsStub();
    await page.goto('http://localhost:3000');
    await page.waitForSelector('.build-history-layout');
  });
});
