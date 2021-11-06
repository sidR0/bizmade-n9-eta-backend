import asyncHandler from "express-async-handler";
import Product from "../models/productModel.js";
import Wishlist from "../models/wishlistModel.js";
import User from "../models/userModel.js";

// @desc Fetch all wishlist items
// @route GET /api/wishlist
// @access Private/Admin
const getwishlistItems = asyncHandler(async (req, res) => {
  const wishlistItems = await Wishlist.find({});
  res.json(wishlistItems);
});

// @desc ADD wishlist item
// @route POST /api/wishlist/:id/products/:id
// @access Private/Admin
const addToWishlist = asyncHandler(async (req, res) => {
  //query for specified user
  const user = await User.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  console.log(req.params);
  //query for all products except for what's on the list
  /* let stuff = await Product.find(
            {_id:{ $not: {$in:[...user.wishlist.items]}}
        });

    if(stuff = 0){
        
    }*/
  const { userId } = req.body;
  console.log(req.params.id);
  const product = await Product.findById(req.params.id);
  console.log(product);
  console.log("body", req.body);
  const data = req.params;
  const wishlistItem = new Wishlist({
    user: userId,
    name: data.name,
    product: data.id,
    price: data.price,
  });

  const wishlistedProduct = await wishlistItem.save();
  res.json(wishlistedProduct);
});

// @desc    Delete a wishlist item
// @route   DELETE /api/wishlists/:id
// @access  Private/Admin
const deleteWishlistItem = asyncHandler(async (req, res) => {
  const wishlistItem = await Wishlist.findById(req.params.id);

  if (wishlistItem) {
    await wishlistItem.remove();
    res.json({ message: "Wishlist Item removed" });
  } else {
    res.status(404);
    throw new Error("Wishlist Item not found");
  }
});

export { getwishlistItems, addToWishlist, deleteWishlistItem };
