const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema;

//more than one schema in one file not a good call but sometimes needed
const ProductCartSchema = new mongoose.Schema({
    product: {
        type: ObjectId,
        ref: "Product"
    },
    name: String,
    count: Number,
    price: Number
});

const ProductCart = mongoose.model("ProductCart", ProductCartSchema);
//----------------------------------------------------------------------------------
const OrderSchema = new mongoose.Schema({
    products: [ProductCartSchema],
    transaction_id: {},
    amount: {type: Number},
    address: String,
    status: {
        type: String,
        default: "",
        enum: ["Cancelled", "Delivered","Shipped","Processing", "Recieved"]  //stages in order define first here 
    },
    update: Date,
    user: {
        type: ObjectId,
        ref: "User"
    }
}, {timestamps: true});


const Order = mongoose.model("Order", OrderSchema);


//external use
module.exports = {Order,ProductCart};
