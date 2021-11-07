import express from 'express'
const router = express.Router()
import {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getMyOrders,
  getOrders,
  getManufacturerOrders
} from '../controllers/orderController.js'

router.route('/').post(addOrderItems)
router.route('/myorders').get(getMyOrders)
//router.route('/myorders').get(getManufacturerOrders)
router.route('/:id').get(getOrderById)
router.route('/:id/pay').put(updateOrderToPaid)
router.route('/:id/deliver').put(updateOrderToDelivered)

export default router
