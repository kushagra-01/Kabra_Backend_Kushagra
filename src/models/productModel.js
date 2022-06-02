const mongoose =require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
      Product_name:{type:String,required:true},
      Product_image:{type:String,required:true},
      Description:{type:String,required:true},
      Quantity:{type:Number,required:true},
      UnitPrice:{type:Number,required:true},

    },
    {
      versionKey:false,
      timestamps:true,
    }
);

const Product = mongoose.model("Product",ProductSchema);

module.exports=Product;