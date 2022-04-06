const mongoose = require("mongoose");
const OrderSchema = new mongoose.Schema(
  {
    userId: { type: String, required: true },
    products: [
      {
        productId: {
          type: String,
        },
        quantity: {
          type: Number,
          default: 1,
        },
      },
    ],

    amount: { type: Number, require: true },
    address: { type: Object, required: true },
    // here type is object because after payment the stripe library will give us
    // the object that will contain the productid amount and other info so that's why it is
    // object
    status: { type: String, default: "pending" },
  },
  {
    timestamps: true,
  }
);
module.exports = mongoose.model("Order", OrderSchema);
