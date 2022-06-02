
const express = require("express");
const connect = require("./config/db");


const Product = require("./controllers/productController");
const Cart = require("./controllers/cartController");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());



app.use("", Product);
app.use("", Cart);



const PORT = process.env.PORT || 6000;

app.listen(PORT, async () => {
  try {
    await connect();
    console.log("listening on port 6000.....");
  } catch (err) {
    console.log(err);
  }
});
