const express = require("express");
const debug = require("debug")("app");
const morgan = require("morgan");
const chalk = require("chalk");
const path = require("path");
const mongoose = require("mongoose");
require("dotenv").config();
const mainRouter = require("./src/routes/mainRouter");
const adminRouter = require("./src/routes/adminRouter");
const productsRouter = require("./src/routes/productsRouter");

const app = express();
const port = process.env.port || 3000;

mongoose.connect(`mongodb+srv://${process.env.DBUSER}:${process.env.DBPASS}@Eshopper.nhrxx.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`, { useNewUrlParser: true });
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

app.use("/public", express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set("views", "./src/views");
app.set("view engine", "ejs");
app.use(
  morgan("tiny", {
    skip: (req) => {
      return req.originalUrl.includes("public");
    },
  })
);

// routes
app.use(mainRouter);
app.use("/admin", adminRouter);
app.use("/products", productsRouter);

app.listen(port, () => {
  debug(`Server running on port ${chalk.green(port)}`);
});
