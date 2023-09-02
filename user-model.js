const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    address: String,
    phoneNumber: String
})

userSchema.virtual("cartItems", {
    ref: "CartItem",
    localField: "_id",
    foreignField: "user"
})

userSchema.virtual("orders", {
    ref: "Order",
    localField: "_id",
    foreignField: "user"
})

// Set up middleware to remove associated cart items and orders when a user is deleted.
userSchema.pre("remove", async function (next) {
    await this.model("CartItem").deleteMany({ user: this._id })
    await this.model("Order").deleteMany({ user: this._id })
    next()
})

const User = mongoose.model("User", userSchema)

module.exports = User
