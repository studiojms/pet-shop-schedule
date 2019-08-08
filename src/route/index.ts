module.exports = (app: any) => {
  app.get('/', (_req: any, res: any) => {
    res.json({ status: 'Server is running!' });
  });
};
