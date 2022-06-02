const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    Product:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"Product",
      required:true
  },
    Quantity:{type:Number,default:1},
   
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const cart = mongoose.model("cart", cartSchema);

module.exports = cart;
