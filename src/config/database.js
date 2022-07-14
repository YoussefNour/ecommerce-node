const mongoose = require("mongoose");
const debug = require("debug")("app:database");

const dbConnection = async (req, res, next) => {
  try {
    return await mongoose.connect('mongodb+srv://dba:yyIhvGNgjIvzRPb9@Eshopper.nhrxx.mongodb.net/?retryWrites=true&w=majority', { useNewUrlParser: true });
  } catch (error) {
    debug(error);
  }
};

module.exports = dbConnection;
