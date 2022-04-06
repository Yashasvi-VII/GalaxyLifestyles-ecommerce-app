const User = require("../models/User");
const {
  verifyToken,
  verifyTokenAndauthorization,
  verifyTokenAndadmin,
} = require("./verifyToken");

const router = require("express").Router();
//CRUD
router.put("/:id", verifyTokenAndauthorization, async (req, res) => {
  // first check the password because user can change the password
  if (req.body.password) {
    req.body.password = CryptoJS.AES.encrypt(
      req.body.password,
      process.env.Password_secret
    ).toString();
  }
  // after that user can be updated
  try {
    // findByIdAndUpdate is a method of mongodb
    const updateduser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body, // set everything inside req.body again but it will not send updated user
        // so do {new:true}
      },
      { new: true }
    );
    res.status(200).json(updateduser);
  } catch (err) {
    res.status(500).json(err);
  }
});

//Delete
router.delete("/:id", verifyTokenAndauthorization, async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User  has been deleted");
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET USer
router.get("/find/:id", verifyTokenAndadmin, async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    const { password, ...others } = user._doc;

    res.status(200).json({ others });
  } catch (error) {
    res.status(500).json(error);
  }
});

//Get all users
router.get("/", verifyTokenAndadmin, async (req, res) => {
  const query = req.query.new;
  try {
    const user = query
      ? await User.find().sort({ _id: -1 }).limit(5) //  returns 5 users
      : await User.find();
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json(error);
  }
});

//GET USER STATS
// for chart
router.get("/stats", verifyTokenAndadmin, async (req, res) => {
  const date = new Date();
  const lastyear = new Date(date.setFullYear(date.getFullYear() - 1));
  try {
    const data = await User.aggregate([
      { $match: { createdAt: { $gte: lastyear } } },
      {
        $project: {
          month: { $month: "$createdAt" },
        },
      },
      {
        $group: {
          _id: "$month",
          total: { $sum: 1 },
        },
      },
    ]);
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
