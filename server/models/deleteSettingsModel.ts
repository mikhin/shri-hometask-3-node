import { Request, Response } from 'express';
import databaseRequest from '../modules/database-request';

export default (request: Request, response: Response): Promise<Response> => databaseRequest.delete('conf')
  .then(() => response.send(request.body))
  .catch((error) => {
    response.status(500);
    return response.send(error.toString());
  });
