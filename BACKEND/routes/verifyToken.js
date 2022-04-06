// middleware
const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
  const authHeader = req.headers.token; // in header we have key and value(bearer)
  if (authHeader) {
    const token = authHeader.split(" ")[1]; // should use split as bearer is used space is there after bearer and token
    // verifying using verify method, after verification it is going to send us
    // err or data(user)
    jwt.verify(token, process.env.JWT_SEC, (err, user) => {
      if (err) res.status(403).json("token is not valid ");
      req.user = user; // asigning user to my request
      next(); // this will leave this function and will go to router
    });
  } else {
    return res.status(401).json("you are not authenticated");
  }
};

const verifyTokenAndauthorization = (req, res, next) => {
  //calling verifytoken to verify token
  verifyToken(req, res, () => {
    if (req.user.id === req.params.id || req.user.isAdmin) {
      next(); // continue;
    } else {
      res.status(403).json("not allowed");
    }
  });
};

// for order and products
const verifyTokenAndadmin = (req, res, next) => {
  verifyToken(req, res, () => {
    if (req.user.isAdmin) {
      next();
    } else {
      res.status(403).json("not allowed");
    }
  });
};
module.exports = {
  verifyToken,
  verifyTokenAndauthorization,
  verifyTokenAndadmin,
};
