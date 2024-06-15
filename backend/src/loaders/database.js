import pkg from 'mongodb';
const { MongoClient } = pkg;
import pkg2 from '../config.js';
const { databaseURL } = pkg2;

let db;

async function initializeClient() {
  const client = await MongoClient.connect(databaseURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    ignoreUndefined: true,
  });

  return client.db();
}

export default async () => {
  if (!db) {
    db = await initializeClient();
  }
  return db;
};
