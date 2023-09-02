const mongoose = require("mongoose")

const cartItemSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference to the User model.
        required: true
    },
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product", // Reference to the Product model.
        required: true
    },
    quantity: {
        type: Number,
        required: true,
        min: 1 // Ensure quantity is a positive integer.
    }
})

const CartItem = mongoose.model("CartItem", cartItemSchema)

module.exports = CartItem
