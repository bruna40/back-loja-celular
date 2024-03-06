import pkg from 'bcryptjs'
import { UserAlreadyExistsError } from './errors/user-already-exists.js'
import { UserModel } from '../models/UserModel.js'

const { hash } = pkg

export class UserService {
  constructor() {
    this.userModel = UserModel
  }

  async createUser({ name, email, password }) {
    try {
      const userWithEmail = await this.userModel.findByEmail(email)
      const password_hash = await hash(password, 6)

      if (userWithEmail) {
        throw new UserAlreadyExistsError()
      }

      await this.userModel.create({
        name,
        email,
        password: password_hash,
      })
    } catch (error) {
      throw new Error('Erro ao cadastrar usuario')
    }
  }

  async userAll() {
    const user = await this.userModel.findMany()

    return user
  }

  async userProfileId({ userId }) {
    const user = await this.userModel.findById(userId)
    if (!user) {
      throw new Error('Usuario informado não cadastrado!')
    }
    return user
  }

  async userUpdate(userId) {
    try {
      const user = await this.userModel.userUpdate(userId)

      return user
    } catch (err) {
      console.error(err)
    }
  }

  async userEmail({ email }) {
    const user = await this.userModel.findByEmail(email)
    return user
  }

  async userDelete(userId) {
    const user = await this.userModel.deleteUser(userId)
    return user
  }
}
