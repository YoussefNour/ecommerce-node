const { MongoClient } = require("mongodb");
const debug = require("debug")("dbConfig");
require("dotenv").config();

const myMongoDb = async () => {
  const url = process.env.DBURI;
  const dbName = process.env.DBNAME;
  let client, db;
  try {
    client = await MongoClient.connect(url);
    db = client.db(dbName);
  } catch (error) {
    debug(error);
  }
  return { db, close: client.close };
};

module.exports = myMongoDb();
