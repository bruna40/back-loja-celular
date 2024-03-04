import { prisma } from '../lib/prisma.js'

export class ProductModel {
  static async create({ name, brand, model, price, color, userId }) {
    const product = await prisma.product.create({
      data: {
        name,
        brand,
        model,
        price,
        color,

        user: {
          connect: { id: userId },
        },
      },
    })

    return product
  }

  static async findByUserId(userId) {
    const products = await prisma.product.findMany({
      where: {
        user_id: userId,
      },
    })

    return products
  }

  static async findAll() {
    const products = await prisma.product.findMany()

    return products
  }

  static async findById(id) {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    })
    return product
  }

  static async updateById(productId, newData) {
    const product = await prisma.product.update({
      where: {
        id: productId,
      },
      data: newData,
    })

    return product
  }
}
