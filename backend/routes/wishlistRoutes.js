import express from 'express'
const router = express.Router()
import {
    getwishlistItems,
    addToWishlist,
    deleteWishlistItem
} from '../controllers/wishlistController.js'

router.route('/').get(getwishlistItems)
router.route('/:id').get(deleteWishlistItem)
router.route('/product/:id').post(addToWishlist)

export default router
