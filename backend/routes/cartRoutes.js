import express from "express";
const router = express.Router();
import {
  getCartItems,
  addToCart,
  deleteCartItem,
} from "../controllers/cartController.js";

router.route("/").get(getCartItems);
router.route("/product/:id").post(addToCart);
router.route("/:id").delete(deleteCartItem);

export default router;
