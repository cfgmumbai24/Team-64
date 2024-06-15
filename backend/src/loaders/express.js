import { json } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import pkg from '../config.js';
const { api } = pkg;
import routes from '../api/api.js';

export default ({ app }) => {
  app.get('/healthcheck', (req, res) => {
    const healthcheck = {
      uptime: process.uptime(),
      message: 'OK',
      timestamp: Date.now(),
    };
    try {
      return res.json(healthcheck);
    } catch (e) {
      return res.status(503).send();
    }
  });
  app.enable('trust proxy');
  app.use(helmet());
  app.use(cors());
  app.use(json());
  app.use(api.prefix, routes());
};
