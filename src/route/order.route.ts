module.exports = (app: any) => {
  app.get('/orders', (_req: any, _res: any) => {
    return [];
  });

  app.get('/orders/:id', (req: any, _res: any) => {
    const { id } = req.params;
    console.log('get', id);
    return {};
  });

  app.post('/orders', (req: any, _res: any) => {
    const order = req.body;
    console.log('insert', order);
    return [];
  });

  app.put('/orders/:id', (req: any, _res: any) => {
    const { id } = req.params;
    const order = req.body;

    console.log('updating', id, order);

    return [];
  });

  app.delete('/orders/:id', (req: any, _res: any) => {
    const { id } = req.params;
    console.log('delete', id);

    return [];
  });
};
