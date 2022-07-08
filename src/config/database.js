const mongoose = require("mongoose");
const debug = require("debug")("app:database");

const dbConnection = async (req, res, next) => {
  try {
    return await mongoose.connect(process.env.DBURI, { useNewUrlParser: true });
  } catch (error) {
    debug(error);
  }
};

module.exports = dbConnection;
