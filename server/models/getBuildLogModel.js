const databaseRequest = require('../modules/database-request');

module.exports = (request, response) => {
  const { buildId } = request.params;

  databaseRequest.get('build/log', { params: { buildId } })
    .then((axiosResponse) => response.send(axiosResponse.data))
    .catch((error) => {
      response.status(500);
      return response.send(error.toString());
    });
};
