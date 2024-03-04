import { ProductService } from '../../services/ProductService.js'

const productService = new ProductService()

export class ProductController {
  static async createProduct(req, res) {
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

  static async getAllProducts(req, res) {
    const products = await productService.getAllProducts()

    res.status(200).json(products)
  }

  static async updateProduct(req, res) {
    const id = req.params.id
    const product = req.body
    try {
      await productService.updateProduct(id, product)
      res.status(200).send()
    } catch (error) {
      console.error('Erro ao atualizar produto:', error)
      res.status(500).json({ error: 'Erro interno do servidor' })
    }
  }

  static async deleteProduct(req, res) {
    const id = req.params.id
    try {
      await productService.deleteProduct(id)
      res.status(200).send()
    } catch (error) {
      console.error('Erro ao deletar produto:', error)
      res.status(500).json({ error: 'Erro interno do servidor' })
    }
  }
}
