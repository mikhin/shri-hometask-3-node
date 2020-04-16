const axios = require('axios');
const databaseRequest = require('../modules/database-request');

module.exports = (request, response) => {
  const { commitHash } = request.params;
  let branchName;

  databaseRequest.get('conf')
    .then((axiosResponse) => {
      const { repoName } = axiosResponse.data.data;

      ({ mainBranch: branchName } = axiosResponse.data.data);
      return axios.get(`https://api.github.com/repos/${repoName}/git/commits/${commitHash}`);
    })
    .then((githubResponse) => {
      const { message: commitMessage, author: { name: authorName } } = githubResponse.data;

      return databaseRequest.post('build/request', {
        commitMessage,
        commitHash,
        branchName,
        authorName,
      });
    })
    .then((axiosResponse) => {
      const build = axiosResponse.data.data;
      return response.send({ ...build });
    })
    .catch((error) => {
      response.status(500);
      return response.send(error.toString());
    });
};
