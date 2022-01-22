const express = require("express");
const product = require("../models/products.model");
const Products = require("../models/products.model"); //the model creates the collection with the data
const router = express.Router();

router
  .get("/products", async (req, res) => {
    try {
      const products = await Products.find({});
      res.status(200).send(products);
    } catch (err) {
      res.status(500).send(err.message);
    }
  })

  .get("/products/active", async (req, res) => {
    try {
      const products = await Products.find({ isActive: true });
      res.status(200).send(products);
    } catch (err) {
      res.status(500).send(err.message);
    }
  })
  .get("/products/:id", async (req, res) => {
    const _id = req.params.id;
    try {
      const product = await Products.findById(_id);
      if (!product) {
        res.status(404).send({ error: "No product" });
      } else {
        res.send(product);
      }
    } catch (err) {
      res.status(500).send(err.message);
    }
  });

router.post("/products", async (req, res) => {
  const product = new Products(req.body);
  try {
    const result = await product.save();
    return res.status(201).send(result);
  } catch (e) {
    return res.status(500).send(e);
  }
});

router.get("/products/pricefilter", async (req, res) => {
  const min = req.body.min;
  const mx = req.body.max;

  try {
    let products = Products.find({});
    products = products.filter(
      (product) => product.price < max && product.price > min
    );
    res.send(products);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

router.patch("/products/:id", async (req, res) => {
  const product = req.body;
const isAllowedUpdates=[""]
  try {
    if (!product.isValidate){
      res.status(404).send({ error: "No product" });
    }
    let products = Products.find({});
    
    res.send(products);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;

//creat a new product
