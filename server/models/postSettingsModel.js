const axiosRequest = require('../modules/axios-request');

module.exports = (req, res) => {
  const {
    repoName,
    buildCommand,
    mainBranch = '',
    period = '',
  } = req.body;

  axiosRequest.post('conf', {
    repoName,
    buildCommand,
    mainBranch,
    period,
  })
    .then(() => res.send(req.body))
    .catch((error) => res.status(500)
      .send(error.toString()));
};
