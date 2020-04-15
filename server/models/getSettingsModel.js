const axiosRequest = require('../modules/axios-request');

module.exports = (req, res) => {
  axiosRequest.get('conf')
    .then((response) => {
      const settings = response.data.data;
      if (!settings) {
        return res.send({});
      }
      const period = settings.period.toString();
      return res.send({ ...settings, period });
    })
    .catch((error) => {
      res.status(500);
      return res.send(error.toString());
    });
};
