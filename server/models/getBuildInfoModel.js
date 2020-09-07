const axiosRequest = require('../modules/axios-request');

module.exports = (request, response) => {
  const { buildId } = request.params;

  axiosRequest.get('build/details', { params: { buildId } })
    .then((axiosResponse) => response.send({ ...axiosResponse.data.data }))
    .catch((error) => {
      response.status(500);
      return response.send(error.toString());
    });
};
