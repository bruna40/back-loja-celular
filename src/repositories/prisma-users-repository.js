import { prisma } from '../lib/prisma.js'

export class PrismaUsersRepository {
  async create(data) {
    const user = await prisma.user.create({
      data,
    })

    return user
  }

  async findById(id) {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    })

    return user
  }

  async findByEmail(email) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    return user
  }
}
