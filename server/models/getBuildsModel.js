const axiosRequest = require('../modules/axios-request');

module.exports = (request, response) => {
  axiosRequest.get('build/list')
    .then((axiosResponse) => response.send([...axiosResponse.data.data]))
    .catch((error) => {
      response.status(500);
      return response.send(error.toString());
    });
};
