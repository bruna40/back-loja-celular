import { prisma } from '../lib/prisma.js'
import pkg from 'bcryptjs'
const { hash } = pkg

export class RegisterService {
  constructor(usersRepository) {
    this.usersRepository = usersRepository
  }

  async execute({ name, email, password }) {
    const password_hash = await hash(password, 6)

    const userWithEmail = await prisma.user.findUnique({
      where: {
        email,
      },
    })

    if (userWithEmail) {
      throw new Error('User already exists')
    }

    await this.usersRepository.create({
      name,
      email,
      password_hash,
    })
  }
}
