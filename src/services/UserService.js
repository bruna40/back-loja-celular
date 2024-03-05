import pkg from 'bcryptjs'
import { UserAlreadyExistsError } from './errors/user-already-exists.js'
import { UserModel } from '../models/UserModel.js'

const { hash } = pkg

export class UserService {
  constructor() {
    this.userModel = UserModel
  }

  async createUser({ name, email, password }) {
    const password_hash = await hash(password, 6)

    const userWithEmail = await this.userModel.findByEmail(email)

    if (userWithEmail) {
      throw new UserAlreadyExistsError()
    }

    await this.userModel.create({
      name,
      email,
      password: password_hash,
    })
  }

  async userProfileId({ userId }) {
    const user = await this.userModel.findById(userId)
    return user
  }

  async userEmail({ email }) {
    const user = await this.userModel.findByEmail(email)
    return user
  }

  async userAll() {
    const user = await this.userModel.findMany()

    return user
  }

  async userUpdate(userId, updateUser) {
    try {
      const user = await this.userModel.userUpdate(userId, updateUser)

      return user
    } catch (err) {
      console.error(err)
    }
  }

  async userDelete(userId) {
    await this.userModel.deleteUser(userId)
  }
}
