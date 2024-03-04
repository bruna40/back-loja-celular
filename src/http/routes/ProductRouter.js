import express from 'express'
import { ProductController } from '../controllers/ProductController.js'

const router = express.Router()

router.post('/products', ProductController.createProduct)
router.get('/products/:userId', ProductController.getAllProductsByUserId)
router.get('/products', ProductController.getAllProducts)
router.put('/products/:id', ProductController.updateProduct)

export default router
