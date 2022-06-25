const express = require("express");
const debug = require("debug")("app:productsRouter");
const db = require("../config/myMongoDb");

const productsRouter = express.Router();

productsRouter.route("/").get(async (req, res) => {
  let products = await db.collection("products").find().toArray();
  res.json(products);
});

module.exports = productsRouter;
