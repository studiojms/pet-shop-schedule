import { Response, Express, Request } from 'express';

module.exports = (app: Express) => {
  app.get('/services', (_req: Request, _res: Response) => {
    return [];
  });

  app.get('/services/:id', (req: Request, _res: Response) => {
    const { id } = req.params;
    console.log('get', id);
    return {};
  });

  app.post('/services', (req: Request, _res: Response) => {
    const service = req.body;
    console.log('insert', service);
    return [];
  });

  app.put('/services/:id', (req: Request, _res: Response) => {
    const { id } = req.params;
    const service = req.body;

    console.log('updating', id, service);

    return [];
  });

  app.delete('/services/:id', (req: Request, _res: Response) => {
    const { id } = req.params;
    console.log('delete', id);

    return [];
  });
};
