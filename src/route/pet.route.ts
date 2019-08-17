import { Response, Express, Request } from 'express';

module.exports = (app: Express) => {
  app.get('/pets', (_req: Request, _res: Response) => {
    return [];
  });

  app.get('/pets/:id', (req: Request, _res: Response) => {
    const { id } = req.params;
    console.log('get', id);
    return {};
  });

  app.post('/pets', (req: Request, _res: Response) => {
    const pet = req.body;
    console.log('insert', pet);
    return [];
  });

  app.put('/pets/:id', (req: Request, _res: Response) => {
    const { id } = req.params;
    const pet = req.body;

    console.log('updating', id, pet);

    return [];
  });

  app.delete('/pets/:id', (req: Request, _res: Response) => {
    const { id } = req.params;
    console.log('delete', id);

    return [];
  });
};
