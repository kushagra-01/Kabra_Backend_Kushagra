const express = require("express");

const router = express.Router();

const product = require("../models/productModel");
const { upload } = require("./fileUpload");


router.post("", upload.single("Product_image"),async (req, res) => {
  
  try {
    const productDetails = await product.create({
      Product_name: req.body.Product_name,
      Product_image: req.file.path,
      Description: req.body.Description,
      Quantity: req.body.Quantity,
      UnitPrice: req.body.UnitPrice,
      
    });
    return res.send(productDetails);
  } catch (err) {
    return res.send(err.message)
  }
});


router.get("", async (req, res) => {
  try {
    const productDetails = await product.find().lean().exec();

    return res.send(productDetails);
  } catch (err) {
    return res.send(err.message);
  }
});


module.exports = router;

