const axiosRequest = require('../modules/axios-request');

module.exports = (req, res) => {
  axiosRequest.get('build/list')
    .then((response) => {
      const builds = response.data.data;
      res.send([...builds]);
    })
    .catch((error) => {
      res.status(500);
      return res.send(error.toString());
    });
};
