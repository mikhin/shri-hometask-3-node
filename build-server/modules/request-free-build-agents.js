const axios = require('axios');
const requestDatabase = require('./request-database');

module.exports = async (buildAgents, builds, settings) => {
  const buildAgentsRequests = buildAgents
    .map((buildAgent) => axios.get(`http://${buildAgent.host}:${buildAgent.port}/state`));

  const buildAgentResponses = await Promise.all(buildAgentsRequests);

  const freeBuildAgents = buildAgentResponses
    .map((agentResponse) => ({
      host: agentResponse.config.url.replace(agentResponse.request.path, ''),
      state: agentResponse.data.result.state,
    }))
    .filter((buildAgent) => buildAgent.state === 'free');

  if (freeBuildAgents.length > 0) {
    const freeBuildAgentsRequests = freeBuildAgents
      .map((buildAgent, index) => {
        const build = builds[index];

        return axios.post(`${buildAgent.host}/build`, {
          buildId: build.id,
          repoName: settings.repoName,
          commitHash: build.commitHash,
          command: settings.buildCommand,
          branchName: build.branchName,
        })
          .then(async () => {
            try {
              await requestDatabase.post('build/start', {
                buildId: build.id,
                dateTime: '2020-04-17T21:14:34.128Z',
              });
            } catch (e) {
              console.log('Saving to database info about starting error.');
            }
          });
      });

    await Promise.all(freeBuildAgentsRequests);
  }

  return undefined;
};
