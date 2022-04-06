const Cart = require("../models/Cart");
const {
  verifyToken,
  verifyTokenAndauthorization,
  verifyTokenAndadmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE
router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);

  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (error) {
    res.status(500).json(error);
  }
});

//update
router.put("/:id", verifyTokenAndauthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedCart);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete
router.delete("/:id", verifyTokenAndauthorization, async (req, res) => {
  try {
    await Cart.findByIdAndDelete(req.params.id);
    res.status(200).json("Cart  has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET user Cart
router.get("/find/:id", verifyTokenAndauthorization, async (req, res) => {
  try {
    const Cart = await Cart.findOne({ userId: req.params.userId });
    res.status(200).json(Cart);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get all products
router.get("/", verifyTokenAndadmin, async (req, res) => {
  try {
    const carts = await Cart.find();
    res.send(200).json(carts);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
