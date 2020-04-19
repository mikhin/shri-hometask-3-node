const requestDatabase = require('./request-database');

module.exports = async (app) => {
  let settingsResponse;

  try {
    ({ data: { data: settingsResponse } } = await requestDatabase.get('conf'));
  } catch (error) {
    console.log('Getting settings error.');
  }

  app.set('settings', settingsResponse);
};
