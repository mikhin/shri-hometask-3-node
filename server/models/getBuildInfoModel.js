const axiosRequest = require('../modules/axios-request');

module.exports = (req, res) => {
  const { buildId } = req.params;

  axiosRequest.get(`build/details?buildId=${buildId}`)
    .then((response) => {
      const build = response.data.data;
      res.send({ ...build });
    })
    .catch((error) => {
      res.status(500);
      return res.send(error.toString());
    });
};
