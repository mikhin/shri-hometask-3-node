const axiosRequest = require('../modules/axios-request');

module.exports = (req, res) => {
  axiosRequest.delete('conf')
    .then(() => res.send(req.body))
    .catch((error) => {
      res.status(500);
      return res.send(error.toString());
    });
};
