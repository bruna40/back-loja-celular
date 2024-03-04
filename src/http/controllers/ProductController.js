import { ProductService } from '../../services/Product.js'

const productService = new ProductService()

export class ProductController {
  async createProduct(req, res) {
    try {
      const { name, brand, model, price, color, userId } = req.body

      await productService.createProduct({
        name,
        brand,
        model,
        price,
        color,
        userId,
      })

      res.status(200).send()
    } catch (error) {
      console.error('Erro ao criar produto:', error)
      res.status(500).json({ error: 'Erro interno do servidor' })
    }
  }

  static async getAllProductsByUserId(req, res) {
    const products = await productService.getAllProductsByUserId({
      userId: req.params.userId,
    })

    res.status(200).json(products)
  }
}
