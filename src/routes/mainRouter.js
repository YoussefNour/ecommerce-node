const express = require("express");
const debug = require("debug")("app:mainRouter");

const mainRouter = express.Router();

mainRouter.route("/").get((req, res) => {
  res.render("index");
});

module.exports = mainRouter;
