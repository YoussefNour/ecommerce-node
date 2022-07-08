const debug = require("debug")("app:productController");
const path = require("path");
const product = require("../models/product");
require("dotenv").config();

exports.list = (req, res) => {
  product.find({}).exec((err, products) => {
    if (err) {
      return res.send(500, err);
    }
    debug("products", products);
    res.render("products", {
      products,
    });
  });
};

// async function getAllProducts() {
//   const client = new MongoClient(process.env.DBURI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   });
//   let products;
//   try {
//     await client.connect();
//     products = await client
//       .db(process.env.DBNAME)
//       .collection("products")
//       .find()
//       .toArray();
//     // debug(products);
//     return products;
//   } catch (error) {
//     debug(error);
//   } finally {
//     await client.close();
//   }
//   return products;
// }

// module.exports = { getAllProducts };
