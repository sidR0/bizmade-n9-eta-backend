import mongoose from "mongoose";

const cartSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
    product: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Product",
    },
    email: {
      type: String,
      required: true,
    },
    name: { type: String },
    qty: { type: Number },
    minQuantity: { type: Number },
    maxQuantity: { type: Number },
    price: { type: Number },
    countInStock: { type: Number },
    manufacturer: { type: String },
  },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
