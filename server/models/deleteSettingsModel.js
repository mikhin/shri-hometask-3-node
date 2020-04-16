const databaseRequest = require('../modules/database-request');

module.exports = (request, response) => {
  databaseRequest.delete('conf')
    .then(() => response.send(request.body))
    .catch((error) => {
      response.status(500);
      return response.send(error.toString());
    });
};
