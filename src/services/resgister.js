import { prisma } from '../lib/prisma.js'
import pkg from 'bcryptjs'
import { PrismaUsersRepository } from '../repositories/prisma-users-repository.js'
const { hash } = pkg

export async function registerService({ name, email, password }) {
  const password_hash = await hash(password, 6)

  const userWithEmail = await prisma.user.findUnique({
    where: {
      email,
    },
  })

  if (userWithEmail) {
    throw new Error('User already exists')
  }

  const prismaUsersRepository = new PrismaUsersRepository()

  await prismaUsersRepository.create({
    name,
    email,
    password_hash,
  })
}
