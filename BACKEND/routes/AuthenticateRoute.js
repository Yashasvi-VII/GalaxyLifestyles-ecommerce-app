const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");

//Register
// this is post because user is going to send the username and
// email password .
router.post("/register", async (req, res) => {
  // we are using user Model
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    // to encrypt the password Crypto AES encrypt is used
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.Password_secret // this key is required to decrypt encrypt passwords
    ).toString(),
    // to save inside our db we are going to convert hashed in string
  });

  try {
    // to save user in mongodb
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
    // 201 is successfully added
  } catch (err) {
    res.status(500).json(err);
  }
});

//Login
router.post("/login", async (req, res) => {
  try {
    // findOne method to find user in db
    const user = await User.findOne({ username: req.body.username });
    !user && res.status(401).json("Wrong Credentials"); // if there is no user return wrong
    // decrypt password using .decrypt method
    const hashpass = CryptoJS.AES.decrypt(
      user.password,
      process.env.Password_secret
    );
    const Orignalpassword = hashpass.toString(CryptoJS.enc.Utf8);

    // Checking the original and hashedpassword
    Orignalpassword != req.body.password &&
      res.status(401).json("Wrong Credentials");

    //jwt
    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      { expiresIn: "3days" }
    );

    const { password, ...others } = user._doc;
    // mongo db stores documents inside _doc folder

    res.status(200).json({ ...others, accessToken });
  } catch (err) {
    res.send(500).json(err);
  }
});

module.exports = router;
