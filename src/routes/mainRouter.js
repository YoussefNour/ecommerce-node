const express = require("express");

const mainRouter = express.Router();

mainRouter.route("/").get((req, res) => {
  res.render("index");
});

module.exports = mainRouter;
