const getBuilds = require('./get-builds');
const requestFreeBuildAgents = require('./request-free-build-agents');

module.exports = async (app) => {
  const builds = app.get('builds');
  const buildAgents = app.get('buildAgents');
  const settings = app.get('settings');
  const state = app.get('state');

  if (!settings
    || buildAgents.length < 0
    || state === 'startingBuilds') {
    return undefined;
  }

  if (builds.length <= 0) {
    const buildsFromDatabase = await getBuilds();
    return app.set('builds', buildsFromDatabase);
  }

  app.set('state', 'startingBuilds');

  await requestFreeBuildAgents(buildAgents, builds, settings);

  app.set('builds', []);

  return app.set('state', undefined);
};
