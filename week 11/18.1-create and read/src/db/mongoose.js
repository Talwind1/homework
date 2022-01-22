const mongoose = require("mongoose"); //connect to database

mongoose.connect("mongodb://127.0.0.1:27017/products", {
  useNewUrlParser: true,
});

// const product = mongoose.model("product", {
//   name: { type: String, require: true, unique: true },
//   categorty: { type: String, require: true },
//   isActive: { type: Boolean },
//   details: { type: String, minLength: 10 },
//   price: {
//     type: Number,
//     validate(value) {
//       if (value <= 0) {
//         throw Error("Price must be positive");
//       }
//     },
//   },
//   discount: { require: false, default: 0 },
//   images: { type: Array, minlength: 2 },
//   phone: {
//     type: String,
//     validate(value) {
//       if (!validator.isMobilePhone(value, "he-IL")) {
//         throw Error("Must be Israeli phone number");
//       }
//     },
//   },
//   DateAdded: { type: Date, default: Date() },
// });

// const tshirt = new product({
//   name: "tshirt",
//   category: "clothes",
//   isActive: false,
//   details: "an amzing tshirt black color for occations",
//   price: 40,
//   images: [{ url: "beautifultshirt.com" }, { url: "beautifultshirt2.com" }],
//   phone: "+972525482429",
// });

// tshirt
//   .save()
//   .then(() => {
//     console.log("suceess adding tshirt", tshirt);
//   })
//   .catch((error) => {
//     console.log("Error", error);
//   });
