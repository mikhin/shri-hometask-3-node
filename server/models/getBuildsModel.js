const databaseRequest = require('../modules/database-request');

module.exports = (request, response) => {
  databaseRequest.get('build/list')
    .then((axiosResponse) => response.send([...axiosResponse.data.data]))
    .catch((error) => {
      response.status(500);
      return response.send(error.toString());
    });
};
