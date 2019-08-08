module.exports = (app: any) => {
  app.get('/services', (_req: any, _res: any) => {
    return [];
  });

  app.get('/services/:id', (req: any, _res: any) => {
    const { id } = req.params;
    console.log('get', id);
    return {};
  });

  app.post('/services', (req: any, _res: any) => {
    const service = req.body;
    console.log('insert', service);
    return [];
  });

  app.put('/services/:id', (req: any, _res: any) => {
    const { id } = req.params;
    const service = req.body;

    console.log('updating', id, service);

    return [];
  });

  app.delete('/services/:id', (req: any, _res: any) => {
    const { id } = req.params;
    console.log('delete', id);

    return [];
  });
};
