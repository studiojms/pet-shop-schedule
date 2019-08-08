module.exports = (app: any) => {
  app.get('/pets', (_req: any, _res: any) => {
    return [];
  });

  app.get('/pets/:id', (req: any, _res: any) => {
    const { id } = req.params;
    console.log('get', id);
    return {};
  });

  app.post('/pets', (req: any, _res: any) => {
    const pet = req.body;
    console.log('insert', pet);
    return [];
  });

  app.put('/pets/:id', (req: any, _res: any) => {
    const { id } = req.params;
    const pet = req.body;

    console.log('updating', id, pet);

    return [];
  });

  app.delete('/pets/:id', (req: any, _res: any) => {
    const { id } = req.params;
    console.log('delete', id);

    return [];
  });
};
