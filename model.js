const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  Email: {
    type: String,
    required: true,
  },
  Password: {
    type: Number,
    default: 0,
  },
});
//Mongoose#model(name, [schema], [collection], [skipInit])

const User = mongoose.model("Product", UserSchema, "product");

module.exports = User;