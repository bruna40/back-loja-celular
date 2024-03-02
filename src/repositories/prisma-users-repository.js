import { prisma } from '../lib/prisma.js'

export class PrismaUsersRepository {
  async create(data) {
    const user = await prisma.user.create({
      data,
    })

    return user
  }
}
