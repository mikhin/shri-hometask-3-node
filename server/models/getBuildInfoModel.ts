import { Request, Response } from 'express';
import databaseRequest from '../modules/database-request';

export default (request: Request, response: Response): Promise<Response> => {
  const { buildId } = request.params;

  return databaseRequest.get('build/details', { params: { buildId } })
    .then((axiosResponse) => response.send({ ...axiosResponse.data.data }))
    .catch((error) => {
      response.status(500);
      return response.send(error.toString());
    });
};
