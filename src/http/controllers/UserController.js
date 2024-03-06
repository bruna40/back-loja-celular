import { UserService } from '../../services/UserService.js'
import { UserAlreadyExistsError } from '../../services/errors/user-already-exists.js'
const userService = new UserService()

export class UserController {
  static async create(request, response) {
    const { name, email, password } = request.body
    try {
      await userService.createUser({ name, email, password })
    } catch (error) {
      if (error instanceof UserAlreadyExistsError) {
        return response.status(409).send({ message: error.message })
      }

      throw error
    }

    return response.status(201).send()
  }

  static async getById(request, response) {
    const { userId } = request.params
    const user = await userService.userProfileId({ userId })

    return response.status(200).json({
      user,
      password_hash: undefined,
    })
  }

  static async userAll(request, response) {
    const user = await userService.userAll()

    return response.status(200).json({
      user,
      password_hash: undefined,
    })
  }

  static async updateUser(req, res) {
    const id = req.params.userId
    const { name, email } = req.body

    try {
      await userService.userUpdate({ id, name, email })
      res.status(200).send()
    } catch (err) {
      console.error('Erro ao atualizar usuário:', err)
      res.status(500).json({ error: 'Erro interno do servidor' })
    }
  }

  static async deleteUser(req, res) {
    const id = req.params.userId
    try {
      await userService.userDelete(id)
      res.status(200).send()
    } catch (error) {
      console.error('Erro ao excluir usuário:', error)
      res.status(500).json({ error: 'Erro interno do servidor' })
    }
  }
}
