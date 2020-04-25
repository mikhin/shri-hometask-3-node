import { Request, Response } from 'express';
import databaseRequest from '../modules/database-request';

export default (request: Request, response: Response): Promise<Response> => {
  const {
    repoName,
    buildCommand,
    mainBranch = '',
    period = '',
  } = request.body;

  return databaseRequest.post('conf', {
    any: repoName,
    buildCommand,
    mainBranch,
    period,
  })
    .then(() => response.send(request.body))
    .catch((error) => response.status(500)
      .send(error.toString()));
};
