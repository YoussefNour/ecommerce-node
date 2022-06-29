const { MongoClient } = require("mongodb");
const debug = require("debug")("app:productService");
require("dotenv").config();

async function getAllProducts() {
  const client = new MongoClient(process.env.DBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  let products;
  try {
    await client.connect();
    products = await client
      .db(process.env.DBNAME)
      .collection("products")
      .find()
      .toArray();
    debug(products);
    return products;
  } catch (error) {
    debug(error);
  } finally {
    await client.close();
  }
  return products;
}

module.exports = { getAllProducts };
