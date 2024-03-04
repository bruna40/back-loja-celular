import { prisma } from '../lib/prisma.js'

export class PrismaProductsRepository {
  async create(data) {
    const product = await prisma.product.create({
      data,
    })

    return product
  }

  async list() {
    const products = await prisma.product.findMany()

    return products
  }

  async findById(id) {
    const product = await prisma.product.findUnique({
      where: {
        id,
      },
    })

    return product
  }
}
