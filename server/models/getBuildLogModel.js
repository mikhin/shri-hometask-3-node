const axiosRequest = require('../modules/axios-request');

module.exports = (req, res) => {
  const { buildId } = req.params;

  axiosRequest.get(`build/log?buildId=${buildId}`)
    .then((response) => res.send(response.data))
    .catch((error) => {
      res.status(500);
      return res.send(error.toString());
    });
};
