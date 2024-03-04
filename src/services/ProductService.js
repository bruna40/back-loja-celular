import { ProductModel } from '../models/ProductModel.js'
import { PrismaUsersRepository } from '../models/RegisterModel.js'

export class ProductService {
  constructor() {
    this.productModel = ProductModel
    this.registerModel = new PrismaUsersRepository()
  }

  async createProduct({ name, brand, model, price, color, userId }) {
    try {
      const user = await this.registerModel.findById(userId)

      if (user) {
        await this.productModel.create({
          name,
          brand,
          model,
          price,
          color,
          userId: user.id,
        })
      }
    } catch (error) {
      throw new Error(`Erro ao criar produto: ${error.message}`)
    }
  }

  async getAllProductsByUserId({ userId }) {
    const products = await this.productModel.findByUserId(userId)
    return products
  }

  async getAllProducts() {
    const products = await this.productModel.findAll()
    return products
  }

  async updateProduct(productId, updatedProductData) {
    try {
      const productUpdated = await this.productModel.updateById(
        productId,
        updatedProductData,
      )
      return productUpdated
    } catch (error) {
      throw new Error(`Erro ao atualizar produto: ${error.message}`)
    }
  }

  async deleteProduct(productId) {
    try {
      await this.productModel.deleteById(productId)
    } catch (error) {
      throw new Error(`Erro ao deletar produto: ${error.message}`)
    }
  }
}
