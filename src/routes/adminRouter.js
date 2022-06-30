const express = require("express");
const { MongoClient } = require("mongodb");
const debug = require("debug")("app:adminRouter");

const adminRouter = express.Router();

adminRouter.route("/addProducts").post(async (req, res) => {
  const client = new MongoClient(process.env.DBURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
  let products;
  try {
    await client.connect();
    debug(req.body);
    products = req.body.products;
    await client
      .db(process.env.DBNAME)
      .collection("products")
      .insertMany(products);
    debug(products);
    res.json(products);
  } catch (error) {
    debug(error);
  } finally {
    await client.close();
  }
});

module.exports = adminRouter;
