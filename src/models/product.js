const mongoose = require("mongoose");
const schema = mongoose.Schema;

const productSchema = new schema({
  id: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String },
  price: { type: Number, required: true },
  discountPercentage: { type: Number },
  rating: { type: Number },
  stock: { type: Number },
  brand: { type: String },
  category: { type: String },
  thumbnail: { type: String },
  images: { type: [String] },
});

const product = mongoose.model("product", productSchema, "products");

module.exports = product;
