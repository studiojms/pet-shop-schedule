import { Response, Express, Request } from 'express';

module.exports = (app: Express) => {
  app.get('/orders', (_req: Request, _res: Response) => {
    return [];
  });

  app.get('/orders/:id', (req: Request, _res: Response) => {
    const { id } = req.params;
    console.log('get', id);
    return {};
  });

  app.post('/orders', (req: Request, _res: Response) => {
    const order = req.body;
    console.log('insert', order);
    return [];
  });

  app.put('/orders/:id', (req: Request, _res: Response) => {
    const { id } = req.params;
    const order = req.body;

    console.log('updating', id, order);

    return [];
  });

  app.delete('/orders/:id', (req: Request, _res: Response) => {
    const { id } = req.params;
    console.log('delete', id);

    return [];
  });
};
