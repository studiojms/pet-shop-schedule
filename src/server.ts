import express from 'express';
// @ts-ignore
import consign from 'consign';

const server = express();
consign({
  extensions: ['.ts'],
})
  .include('/src/middlewares.ts')
  .then('/src/routes')
  .then('/src/boot.ts')
  .into(server);
