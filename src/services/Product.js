import { ProductModel } from '../models/ProductModel.js'
import { PrismaUsersRepository } from './../models/RegisterModel.js'

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
}
