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

  async findMany() {
    const user = await prisma.user.findMany()

    return user
  }

  async userUpdate(data) {
    const user = await prisma.user.update({
      where: {
        id: data.id,
      },
      data,
    })

    return user
  }

  async userDelete(id) {
    const user = await prisma.user.delete({
      where: {
        id,
      },
    })

    return user
  }
}
