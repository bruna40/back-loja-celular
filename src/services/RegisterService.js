import pkg from 'bcryptjs'
import { UserAlreadyExistsError } from './errors/user-already-exists.js'
import { PrismaUsersRepository } from './../models/RegisterModel.js'

const { hash } = pkg

export class RegisterService {
  constructor() {
    this.usersRepository = new PrismaUsersRepository()
  }

  async execute({ name, email, password }) {
    const password_hash = await hash(password, 6)

    const userWithEmail = await this.usersRepository.findByEmail(email)

    if (userWithEmail) {
      throw new UserAlreadyExistsError()
    }

    await this.usersRepository.create({
      name,
      email,
      password_hash,
    })
  }

  async userProfileId({ userId }) {
    const user = await this.usersRepository.findById(userId)
    return user
  }

  async userAll() {
    const user = await this.usersRepository.findMany()

    return user
  }

  async userByEmail({ email }) {
    const user = await this.usersRepository.findByEmail(email)

    return user
  }

  async userUpdate({ userId }) {
    const user = await this.usersRepository.findById(userId)

    if (!user) {
      console.error('User not found')
    }
  }
}
