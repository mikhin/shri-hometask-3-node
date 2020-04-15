const axios = require('axios');
const axiosRequest = require('../modules/axios-request');

module.exports = (req, res) => {
  const { commitHash } = req.params;
  let branchName;

  axiosRequest.get('conf')
    .then((confResponse) => {
      const { repoName } = confResponse.data.data;

      ({ mainBranch: branchName } = confResponse.data.data);
      return axios.get(`https://api.github.com/repos/${repoName}/git/commits/${commitHash}`);
    })
    .then((githubResponse) => {
      const { message: commitMessage, author: { name: authorName } } = githubResponse.data;

      return axiosRequest.post('build/request', {
        commitMessage,
        commitHash,
        branchName,
        authorName,
      });
    })
    .then((axiosResponse) => {
      const build = axiosResponse.data.data;
      return res.send({ ...build });
    })
    .catch((error) => {
      res.status(500);
      return res.send(error.toString());
    });
};
