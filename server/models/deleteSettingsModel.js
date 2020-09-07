const axiosRequest = require('../modules/axios-request');

module.exports = (request, response) => {
  axiosRequest.delete('conf')
    .then(() => response.send(request.body))
    .catch((error) => {
      response.status(500);
      return response.send(error.toString());
    });
};
