const mongoose = require("mongoose");
const debug = require("debug")("app:dbConfig");
require("dotenv").config();

let db;
(() => {
  const uri = `mongodb+srv://dba:${process.env.DBPASS}@eshopper.nhrxx.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;
  try {
    mongoose
      .connect(uri, {
        useNewUrlParser: true,
      })
      .then(() => {
        debug("connected to database");
      })
      .catch((error) => {
        debug(error);
      });
    db = mongoose.connection;
  } catch (error) {
    debug(error);
  }
})();

module.exports = db;
