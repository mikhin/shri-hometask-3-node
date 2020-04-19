// /build — запустить сборку.
// В параметрах — id сборки, адрес репозитория, хэш коммита, команда, которую надо запустить
const buildServerRequest = require('../modules/build-server-request');
const createBuildArtefact = require('../modules/create-build-artefact');

module.exports = async (request, response) => {
  const agentState = request.app.get('state');

  if (agentState === 'buildHaveStarted') {
    return response.send({
      status: 'agentIsBusy',
    });
  }

  const {
    body: {
      buildId, repoName, commitHash, command, branchName,
    },
  } = request;

  if (!buildId || !repoName || !commitHash || !command || !branchName) {
    return response.send({
      status: 'requiredFieldsAreMissing',
    });
  }

  response.send({
    status: 'buildHaveStarted',
  });

  request.app.set('state', 'buildHaveStarted');

  const {
    buildStdout,
    buildStderr,
    buildError,
  } = await createBuildArtefact(buildId, repoName, command);

  request.app.set('state', 'buildHaveFinished');

  await buildServerRequest.post('notify-build-result', {
    buildId,
    isSuccess: !buildError,
    log: `${buildStdout}\n${buildStderr}`,
  });

  return request.app.set('state', 'free');
};
