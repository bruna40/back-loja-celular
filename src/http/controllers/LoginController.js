import { LoginService } from '../../services/LoginService.js'

export class LoginController {
  static async login(request, response) {
    const { email, password } = request.body
    const loginService = new LoginService()

    try {
      const login = await loginService.login({ email, password })
      return response.status(200).json(login)
    } catch (error) {
      return response.status(401).send({ message: error.message })
    }
  }
}
