const request = require('supertest');

const app = require('../index');

const stubNockGetRequest = require('./helpers/stubNockGetRequest');
const settingsStub = require('./stubs/settings-stub');

const SETTINGS_RESPONSE = {
  buildCommand: 'npm run build',
  id: '32541d29-aac4-4b3e-962d-beeecce91cc9',
  mainBranch: 'master',
  period: '20',
  repoName: 'mikhin/mikhin.github.io',
};

describe('Настройки репозитория', () => {
  describe('Получение настроек репозитория', () => {
    it('Настройки репозитория существуют', async () => {
      stubNockGetRequest('/conf', settingsStub);

      const res = await request(app)
        .get('/api/settings');

      await expect(res.statusCode)
        .toEqual(200);
      await expect(res.body)
        .toMatchObject(SETTINGS_RESPONSE);
    });

    it('Настройки репозитория отсутствуют', async () => {
      stubNockGetRequest('/conf', {});

      const res = await request(app).get('/api/settings');

      await expect(res.statusCode).toEqual(200);
      await expect(res.body).toMatchObject({});
    });
  });
});
