import { UserModel } from '../models/UserModel.js'
import { secret } from './../tokens/jsonSecret.js'
import pkg from 'bcryptjs'
import jwt from 'jsonwebtoken'
const { compare } = pkg

export class LoginService {
  constructor() {
    this.userModel = UserModel
  }

  async login({ email, password }) {
    const user = await this.userModel.findByEmail(email)
    if (!user) {
      throw new Error('Usuário não encontrado')
    }

    const equalPassword = await compare(password, user.password_hash)

    if (!equalPassword) {
      throw new Error('Senha incorreta')
    }

    const acessToken = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      secret,
      {
        expiresIn: 86400,
      },
    )

    return {
      acessToken,
    }
  }
}
