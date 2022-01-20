const mongoose = require("mongoose");
const validator = require("validator");

const product = mongoose.model("product", {
  name: { type: String, require: true, unique: true },
  categorty: { type: String, require: true },
  isActive: { type: Boolean },
  details: { type: String, minLength: 10 },
  price: {
    type: Number,
    validate(value) {
      if (value <= 0) {
        throw Error("Price must be positive");
      }
    },
  },
  discount: { require: false, default: 0 },
  images: { type: Array, minlength: 2 },
  phone: {
    type: String,
    validate(value) {
      if (!validator.isMobilePhone(value, "he-IL")) {
        throw Error("Must be Israeli phone number");
      }
    },
  },
  DateAdded: { type: Date, default: Date.now() },
});

module.exports = product;
