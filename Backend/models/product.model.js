const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
    name:{
        type:string,
        required:true
    },
    price:{
        type:number,
        required:true
    },
    image:{
        type:string,
        required:true
    }
});

const Product = new mongoose.model("Product", productSchema);

export default Product;