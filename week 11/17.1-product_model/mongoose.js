const mongoose = require("mongoose");
const { boolean } = require("optimist");
const validator = require("validator");

mongoose.connect("mongodb://127.0.0.1:27017/task-manager-api", {
  userNewUeelParser: true,
  useCreateIndex: true,
});

const User = mongoose.model("Product", {
  name: { type: String, require: true, unique: true },
  Categorty: { type: String, require: true },
  isActive: { type: boolean },
  details: { description: String, minLength: 10 },
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
    type: Number,
    validate(vaue) {
      if (!validator.isMobilePhoneLocales(value)) {
        //'he-IL'
        throw Error("Must be Israeli phone number");
      }
    },
  },
  DateAdded: { type: Date, default: Date() },
});

product
  .save()
  .then(() => {
    console.log(product);
  })
  .catch((error) => {
    console.log("Error".error);
  });
