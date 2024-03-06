import { prisma } from '../lib/prisma.js'

export class UserModel {
  static async create({ name, email, password }) {
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password_hash: password,
      },
    })

    return user
  }

  static async findById(id) {
    const user = await prisma.user.findUnique({
      where: {
        id,
      },
    })

    return user
  }

  static async findByEmail(email) {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    return user
  }

  static async findMany() {
    const user = await prisma.user.findMany()

    return user
  }

  static async userUpdate(updateUser) {
    try {
      await prisma.user.update({
        where: {
          id: updateUser.id,
        },
        data: {
          name: updateUser.name,
          email: updateUser.email,
        },
      })
    } catch (err) {
      throw new Error('Erro ao editar usuario!')
    }
  }

  static async deleteUser(id) {
    const user = await prisma.user.delete({
      where: {
        id,
      },
    })

    return user
  }
}
