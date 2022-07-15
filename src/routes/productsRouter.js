const { response } = require("express");
const express = require("express");
const debug = require("debug")("app:productsRouter");
// const productService = require("../services/productsServices");
const productsController = require("../controller/products.controller");
const product = require("../models/product");
const productsRouter = express.Router();

productsRouter.route("/").get(async (req, res) => {
  try {
    const products = await product.find({});
    res.render("products", { products });
  } catch (error) {
    debug(error);
    response.status(500).send(error);
  }
});

productsRouter.route("/:id").get(async (req, res) => {
  try {
    const reqProduct = await product.findById(req.params.id);
    res.render("detail", { reqProduct });
    // res.json(reqProduct);
  } catch (error) {
    debug(error);
    response.status(500).send(error);
  }
});

module.exports = productsRouter;
