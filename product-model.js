const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    price: {
        type: Number,
        required: true,
        min: 0.01 // Ensure the price is a positive value.
    },
    stock: {
        type: Number,
        required: true,
        min: 0 // Ensure the stock is a non-negative integer.
    },
    category: {
        type: String,
        required: true
    },
    imageURL: String
})

const Product = mongoose.model("Product", productSchema)

module.exports = Product
