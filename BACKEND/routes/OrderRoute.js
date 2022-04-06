const Order = require("../models/Order");
const {
  verifyToken,
  verifyTokenAndauthorization,
  verifyTokenAndadmin,
} = require("./verifyToken");

const router = require("express").Router();

//CREATE
router.post("/", verifyToken, async (req, res) => {
  const newOrder = new Order(req.body);

  try {
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (error) {
    res.status(500).json(error);
  }
});

//update
router.put("/:id", verifyTokenAndadmin, async (req, res) => {
  try {
    const updatedOrder = await Order.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json(updatedOrder);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete
router.delete("/:id", verifyTokenAndadmin, async (req, res) => {
  try {
    await Order.findByIdAndDelete(req.params.id);
    res.status(200).json("Order  has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET user order
router.get("/find/:id", verifyTokenAndauthorization, async (req, res) => {
  try {
    const Orders = await Order.find({ userId: req.params.userId });
    res.status(200).json(Orders);
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get all products
router.get("/", verifyTokenAndadmin, async (req, res) => {
  try {
    const Orders = await Order.find();
    res.send(200).json(Orders);
  } catch (error) {
    res.status(500).json(error);
  }
});

// Get monthly income(stats)
router.get("/income", verifyTokenAndadmin, async (req, res) => {
  const date = new Date();
  const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
  const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));

  try {
    const income = await Order.aggregate([
      { $match: { createdAt: { $gte: previousMonth } } },
      {
        $project: {
          month: { $month: "$createdAt" },
          sales: "$amount",
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: "$sales" },
        },
      },
    ]);
    res.status(200).json(income);
  } catch (err) {
    res.status(500).json(err);
  }
});
module.exports = router;
