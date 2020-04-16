const databaseRequest = require('../modules/database-request');

module.exports = (request, response) => {
  databaseRequest.get('conf')
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
