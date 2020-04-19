const config = require('../config');
const buildServerRequest = require('./build-server-request');

module.exports = async (app) => {
  let buildServerResponseStatus;

  try {
    ({ data: { status: buildServerResponseStatus } } = await buildServerRequest.post('notify-agent', {
      host: config.host,
      port: config.port,
    }));
  } catch (error) {
    console.log(`Error on starting: ${error.toString()}`);
    process.exit(1);
  }

  switch (buildServerResponseStatus) {
    case 'requiredFieldsAreMissing':
    case 'invalidHost':
    case 'invalidPort':
    case 'agentAlreadyRegistered':
      console.log(`Error on starting: ${buildServerResponseStatus}`);
      process.exit(1);
      break;
    default:
      app.set('state', 'free');
  }
};
