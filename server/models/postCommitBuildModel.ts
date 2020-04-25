import { Request, Response } from 'express';
import axios from 'axios';

import databaseRequest from '../modules/database-request';

export default (request: Request, response: Response): Promise<Response> => {
  const { commitHash } = request.params;

  let branchName: string;

  return databaseRequest.get('conf')
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
