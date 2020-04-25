// /notify-agent — зарегистрировать агента .
// В параметрах хост и порт, на котором запущен агент

const some = require('lodash/some');
const checkHostValidity = require('../helpers/check-host-validity');
const checkPortValidity = require('../helpers/check-port-validity');

export default (request, response) => {
  const { body: { host, port } } = request;

  if (!host || !port) {
    return response.send({
      status: 'requiredFieldsAreMissing',
    });
  }

  if (!checkHostValidity(host)) {
    return response.send({
      status: 'invalidHost',
    });
  }

  if (!checkPortValidity(port)) {
    return response.send({
      status: 'invalidPort',
    });
  }

  const buildAgents = request.app.get('buildAgents');

  if (some(buildAgents, { host, port })) {
    return response.send({
      status: 'agentAlreadyRegistered',
    });
  }

  buildAgents.push({
    host,
    port,
  });

  return response.send({
    status: 'agentHaveRegistered',
  });
};
