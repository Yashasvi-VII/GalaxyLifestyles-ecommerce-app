const mongoose = require("mongoose");
// inside schema there is objects with diffrent properties
const UserSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    image: {
      type: String,
    },
  },
  {
    // we could used createdAt:Date.now() for current date
    // but there is a function in moongoose timestramps:true// it will create created at and updated at times
    timestamps: true,
  }
);
module.exports = mongoose.model("User", UserSchema);
