import { Response, Express, Request } from 'express';

module.exports = (app: Express) => {
  app.get('/customers', (_req: Request, res: Response) => {
    console.log('list', []);
    res.json([]);
  });

  app.get('/customers/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    console.log('get', id);
    res.json({});
  });

  app.post('/customers', (req: Request, res: Response) => {
    const customer = req.body;
    console.log('insert', customer);
    res.status(201);
  });

  app.put('/customers/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    const customer = req.body;

    console.log('updating', id, customer);

    res.status(200);
  });

  app.delete('/customers/:id', (req: Request, res: Response) => {
    const { id } = req.params;
    console.log('delete', id);

    res.status(200);
  });
};
