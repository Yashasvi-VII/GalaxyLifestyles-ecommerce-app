const Product = require("../models/Product");
const {
  verifyToken,
  verifyTokenAndauthorization,
  verifyTokenAndadmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE
router.post("/", verifyTokenAndadmin, async (req, res) => {
  const newProduct = new Product(req.body);

  try {
    const savedProduct = await newProduct.save();
    res.status(200).json(savedProduct);
  } catch (error) {
    res.status(500).json(error);
  }
});

//update
router.put("/:id", verifyTokenAndadmin, async (req, res) => {
  try {
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedProduct);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete
router.delete("/:id", verifyTokenAndadmin, async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.status(200).json("Product  has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET Products
// users and admin can reach this data so we are not checking the admin through token
router.get("/find/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get all products
router.get("/", async (req, res) => {
  const querynew = req.query.new;
  const querycategory = req.query.category; // used in products.js (components ) in useffect selctedcategories
  try {
    let product;
    if (querynew) {
      product = await Product.find().sort({ createdAt: -1 }).limit(5);
    } else if (querycategory) {
      product = await Product.find({
        categories: {
          $in: [querycategory],
        },
      });
    } else {
      product = await Product.find();
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
