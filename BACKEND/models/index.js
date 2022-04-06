// express server
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
// this is our application
const app = express();

const userRoute = require("./routes/UsersRoute");
const authRoute = require("./routes/AuthenticateRoute");
const productRoute = require("./routes/ProductRoute");
const cartRoute = require("./routes/CartRoute");
const orderRoute = require("./routes/OrderRoute");
const stripeRoute = require("./routes/Stripe");

// cors:- cross origin resource sharing
const cors = require("cors");
dotenv.config();
app.use(cors());

// mongo server

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Db connectionn successfull !!!! :)"))
  .catch((err) => {
    console.log(err);
  });

app.use(express.json()); // so that our app can take json object
app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);
app.use("/api/products", productRoute);
app.use("/api/carts", cartRoute);
app.use("/api/orders", orderRoute);
app.use("/api/checkout", stripeRoute);

app.listen(process.env.PORT, () => {
  console.log("Backend server is running YES!! :)");
});
