import express from 'express'

import { ProductController } from '../controllers/ProductController.js'

const router = express.Router()

const productController = new ProductController()

router.post('/products', productController.createProduct)
router.get('/products/:userId', ProductController.getAllProductsByUserId)

export default router
