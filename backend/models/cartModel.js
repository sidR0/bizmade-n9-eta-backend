import mongoose from "mongoose";

const cartSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User"
    },
    name: { type: String },
    qty: { type: Number },
    price: { type: Number },
    countInStock: { type: Number },
    product : {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "Product",
    }
    },
  { timestamps: true }
);

const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
