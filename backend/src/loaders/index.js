import database from './database.js';
import express from './express.js';
import Logger from './logger.js';

export default async ({ expressApp }) => {
  await database();
  Logger.info(`✌️ Connection to database successful`);

  await express({ app: expressApp });
  Logger.info('✌️ Express loaded');

  Logger.info('✅ All modules loaded!');
};
