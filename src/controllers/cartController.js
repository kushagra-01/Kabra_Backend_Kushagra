const express = require("express");

const router = express.Router();

const cart = require("../models/cartModel");

router.post("/cart", async (req, res) => {
  try {
    const productDetails = await cart.create(req.body);
    return res.send(productDetails);
  } catch (err) {
    return res.send(err.message);
  }
});

router.get("/cart", async (req, res) => {
  try {
    const productDetails = await cart.find().populate("Product").lean().exec();

    return res.send(productDetails);
  } catch (err) {
    return res.send(err.message);
  }
});

router.patch("/cart/:id", async (req, res) => {
  try {
    const data = await cart
      .findByIdAndUpdate(
        req.params.id,
        { Quantity: req.body.Quantity },
        { new: true }
      )
      .lean()
      .exec();

    return res.status(201).send(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

router.delete("/cart/:id", async (req, res) => {
  try {
    const data = await cart.findByIdAndDelete(req.params.id);

    return res.status(201).send(data);
  } catch (error) {
    return res.status(500).send(error.message);
  }
});

module.exports = router;
