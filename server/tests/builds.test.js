const request = require('supertest');

const app = require('../index');

const stubNockGetRequest = require('./helpers/stubNockGetRequest');
const stubNockPostRequest = require('./helpers/stubNockPostRequest');
const settingsStub = require('./stubs/settings-stub');
const buildsGetStub = require('./stubs/builds-get-stub');
const buildGetStub = require('./stubs/build-get-stub');
const buildRequestPostStub = require('./stubs/build-request-post-stub');

const BUILDS_RESPONSE = [{
  id: 'b26455a5-1ec9-42be-92e0-d121aeb40993',
  configurationId: '32541d29-aac4-4b3e-962d-beeecce91cc9',
  buildNumber: 1,
  commitMessage: 'Удаление лишних атрибутов с изображения cam.',
  commitHash: '7fd8d5c278bed818473986548518a84477fef9c9',
  branchName: 'master',
  authorName: 'y.mikhin',
  status: 'Success',
  start: '2020-03-14T16:24:58.213',
  duration: 15,
}];

describe('Билды', () => {
  it('Список билдов', async () => {
    stubNockGetRequest('/build/list', buildsGetStub);

    const res = await request(app)
      .get('/api/builds');

    await expect(res.statusCode)
      .toEqual(200);
    await expect(res.body)
      .toMatchObject(BUILDS_RESPONSE);
  });

  describe('Один билд', () => {
    const buildId = BUILDS_RESPONSE[0].id;

    it('Информация об одном билде', async () => {
      stubNockGetRequest(`/build/details?buildId=${buildId}`, buildGetStub);

      const res = await request(app)
        .get(`/api/builds/${buildId}`);

      await expect(res.statusCode)
        .toEqual(200);
      await expect(res.body)
        .toMatchObject(BUILDS_RESPONSE[0]);
    });

    it('Лог одного билда', async () => {
      expect.assertions(2);
      stubNockGetRequest(`/build/log?buildId=${buildId}`, 'LOG LOL');

      const res = await request(app)
        .get(`/api/builds/${buildId}/logs`);

      await expect(res.statusCode)
        .toEqual(200);
      await expect(res.text)
        .toEqual('LOG LOL');
    });
  });

  describe('Запуск билда', () => {
    const { commitHash } = BUILDS_RESPONSE[0];

    it('Постановка билда в очередь', async () => {
      stubNockPostRequest('/build/request', buildRequestPostStub);
      stubNockGetRequest('/conf', settingsStub);

      const res = await request(app)
        .post(`/api/builds/${commitHash}`)
        .send({
          commitMessage: BUILDS_RESPONSE[0].commitMessage,
          commitHash,
          branchName: BUILDS_RESPONSE[0].branchName,
          authorName: BUILDS_RESPONSE[0].authorName,
        })
        .set('Accept', 'application/json');

      await expect(res.statusCode)
        .toEqual(200);
      await expect(res.body)
        .toMatchObject({
          id: '3fa85f64-5717-4562-b3fc-2c963f66afa6',
          buildNumber: 0,
          status: 'Waiting',
        });
    });
  });
});
