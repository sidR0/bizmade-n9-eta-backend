import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct,
  getTopProducts,
} from "../controllers/productController.js";
import { protect, manufacturer } from "../middleware/authMiddleware.js";

router.route("/").get(getProducts).post(protect, manufacturer, createProduct);
router.get("/top", getTopProducts);
router
  .route("/:id")
  .get(getProductById)
  .put(protect, manufacturer, updateProduct)
  .delete(protect, manufacturer, deleteProduct);

export default router;
