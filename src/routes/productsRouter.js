const express = require("express");
const debug = require("debug")("app:productsRouter");
const productService = require("../services/productsServices");

const productsRouter = express.Router();

productsRouter.route("/").get(async (req, res) => {
  try {
    const products = await productService.getAllProducts();
    debug(products);
    res.render("products", { products });
  } catch (error) {
    debug(error);
  }
});

module.exports = productsRouter;
