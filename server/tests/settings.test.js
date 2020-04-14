const request = require('supertest');

const app = require('../index');

const stubNockGetRequest = require('./helpers/stubNockGetRequest');
const stubNockPostRequest = require('./helpers/stubNockPostRequest');
const settingsGetStub = require('./stubs/settings-get-stub');

const SETTINGS_GET_RESPONSE = {
  buildCommand: 'npm run build',
  id: '32541d29-aac4-4b3e-962d-beeecce91cc9',
  mainBranch: 'master',
  period: '20',
  repoName: 'mikhin/mikhin.github.io',
};

const SETTINGS_POST_RESPONSE = {
  buildCommand: 'npm run build',
  mainBranch: 'master',
  period: '20',
  repoName: 'mikhin/mikhin.github.io',
};

describe('Настройки репозитория', () => {
  describe('Получение настроек репозитория', () => {
    it('Настройки репозитория существуют', async () => {
      stubNockGetRequest('/conf', settingsGetStub);

      const res = await request(app)
        .get('/api/settings');

      await expect(res.statusCode)
        .toEqual(200);
      await expect(res.body)
        .toMatchObject(SETTINGS_GET_RESPONSE);
    });

    it('Настройки репозитория отсутствуют', async () => {
      stubNockGetRequest('/conf', {});

      const res = await request(app).get('/api/settings');

      await expect(res.statusCode).toEqual(200);
      await expect(res.body).toMatchObject({});
    });
  });

  it('Сохранение настроек репозитория', async () => {
    stubNockPostRequest('/conf', {});

    const res = await request(app)
      .post('/api/settings')
      .send(SETTINGS_POST_RESPONSE)
      .set('Accept', 'application/json');

    await expect(res.statusCode)
      .toEqual(200);
    await expect(res.body)
      .toMatchObject(SETTINGS_POST_RESPONSE);
  });
});
