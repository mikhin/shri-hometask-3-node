const getHistoryBuildRequestsStub = require('./helpers/getHistoryBuildRequestsStub');
const waitForSelectorText = require('./helpers/waitForSelectorText');

describe('Страница «История билдов»', () => {
  beforeEach(async () => {
    await page.close();
    page = await context.newPage();
    getHistoryBuildRequestsStub();
    await page.goto('http://localhost:3000');
  });

  it('Правильно отображается карточка билда в списке билдов', async () => {
    await page.waitForSelector('.build-history-layout');
    await waitForSelectorText('.commit-list__content > .commit-list__item:nth-child(1) .commit-card__id', '3');
    await waitForSelectorText('.commit-list__content > .commit-list__item:nth-child(1) .commit-card__title', 'Удаление файлов CSS.');
    await waitForSelectorText('.commit-list__content > .commit-list__item:nth-child(1) .commit-card__branch', 'master');
    await waitForSelectorText('.commit-list__content > .commit-list__item:nth-child(1) .commit-card__hash', '491cef8319881d6e18942ca0615a01384eaaab48');
    await waitForSelectorText('.commit-list__content > .commit-list__item:nth-child(1) .commit-card__author', 'y.mikhin');
  });

  it('Клик по карточке билда, переход на детальный просмотр билда', async () => {
    await page.waitForSelector('.build-history-layout');
    await page.click('.commit-list__content > .commit-list__item:nth-child(1) .commit-card__link');
    await page.waitForSelector('.commit-card_view_detail');
  });

  describe('Создание нового билда', () => {
    it('Успешное создание', async () => {
      await page.waitForSelector('.build-history-layout');
      await page.click('.header__actions > .header__action-item:nth-child(1) > .button_theme_navigation');
      await page.focus('#hash');
      await page.keyboard.type('491cef8319881d6e18942ca0615a01384eaaab48');
      await page.click('.new-build-form .form__action .button_theme_primary');
      await page.waitForSelector('.commit-card_view_detail');
    });

    it('Ошибка «Коммит не найден»', async () => {
      await page.waitForSelector('.build-history-layout');
      await page.click('.header__actions > .header__action-item:nth-child(1) > .button_theme_navigation');
      await page.focus('#hash');
      await page.keyboard.type('notrealcommithash');
      await page.click('.new-build-form .form__action .button_theme_primary');
      await page.waitFor(2000);
      await waitForSelectorText('body > div.ReactModalPortal > div > div > div > form > div.form__error', 'Commit does not exist');
    });
  });
});
