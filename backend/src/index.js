import express from 'express';
import pkg from './config.js';
const { port } = pkg;
import Loaders from './loaders/index.js';
import Logger from './loaders/logger.js';

async function startServer() {
  const app = express();

  await Loaders({ expressApp: app });

  app
    .listen(port, () => {
      Logger.info(`
      ################################################
      🛡️  Server listening on port: ${port} 🛡️
      ################################################
    `);
    })
    .on('error', err => {
      error(err);
      process.exit(1);
    });
}

startServer();
