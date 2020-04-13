const getSettingsPageRequestsStub = require('./helpers/getSettingsPageRequestsStub');
const waitForSelectorText = require('./helpers/waitForSelectorText');

describe('Страница «Настройки»', () => {
  beforeEach(async () => {
    await page.close();
    page = await context.newPage();
    getSettingsPageRequestsStub();
    await page.goto('http://localhost:3000/settings');
  });

  it('Отображаются все поля', async () => {
    await page.waitForSelector('.settings-layout');
    await page.waitForSelector('#username');
    await page.waitForSelector('#command');
    await page.waitForSelector('#branch');
    await page.waitForSelector('#interval');
  });

  it('Настройки сохраняются успешно', async () => {
    await page.waitForSelector('.settings-layout');
    await page.focus('#username');
    await page.keyboard.type('mikhin/mikhin.github.io');
    await page.focus('#command');
    await page.keyboard.type('npm run build');
    await page.focus('#branch');
    await page.keyboard.type('master');
    await page.focus('#interval');
    await page.keyboard.type('10');
    await page.waitFor(2000);
    await page.click('.settings-form .form__action .button_theme_primary');
    await page.waitFor(2000);
    await waitForSelectorText('.settings-form .form__success', 'Настройки сохранены');
  });
});
