const express = require("express");
const debug = require("debug")("app");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const chalk = require("chalk");
const path = require("path");
require("dotenv").config();
const mainRouter = require("./src/routes/mainRouter");
const productsRouter = require("./src/routes/productsRouter");

const app = express();
const port = process.env.port || 3000;

app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(
  morgan("tiny", {
    skip: (req) => {
      return req.originalUrl.includes("public");
    },
  })
);
app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use(mainRouter);
app.use("/products", productsRouter);

app.listen(port, () => {
  debug(`Server running on port ${chalk.green(port)}`);
});
