const axiosRequest = require('../modules/axios-request');

module.exports = (request, response) => {
  axiosRequest.get('conf')
    .then((axiosResponse) => {
      const settings = axiosResponse.data.data;

      if (!settings) {
        return response.send({});
      }

      const period = settings.period.toString();

      return response.send({ ...settings, period });
    })
    .catch((error) => {
      response.status(500);
      return response.send(error.toString());
    });
};
