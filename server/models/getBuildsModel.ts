import { Request, Response } from 'express';
import databaseRequest from '../modules/database-request';

export default (request: Request, response: Response): Promise<Response> => databaseRequest.get('build/list')
  .then((axiosResponse) => response.send([...axiosResponse.data.data]))
  .catch((error) => {
    response.status(500);
    return response.send(error.toString());
  });
