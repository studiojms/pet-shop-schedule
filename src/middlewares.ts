import bodyParser from 'body-parser';

module.exports = (server: any) => {
  server.use(bodyParser.json());
};
