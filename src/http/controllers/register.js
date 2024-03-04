import { z } from 'zod'
import { RegisterService } from '../../services/RegisterService.js'
import { UserAlreadyExistsError } from '../../services/errors/user-already-exists.js'

export class RegisterController {
  static async register(request, response) {
    const registerBodySchema = z.object({
      name: z.string(),
      email: z.string().email(),
      password: z.string().min(6),
    })
    const { name, email, password } = registerBodySchema.parse(request.body)
    try {
      const registerService = new RegisterService()
      await registerService.execute({ name, email, password })
    } catch (error) {
      if (error instanceof UserAlreadyExistsError) {
        return response.status(409).send({ message: error.message })
      }

      throw error
    }

    return response.status(201).send()
  }

  static async userId(request, response) {
    const registerService = new RegisterService()
    const user = await registerService.userProfileId({
      userId: request.params.userId,
    })

    return response.status(200).json({
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        password_hash: undefined,
      },
    })
  }

  static async userAll(request, response) {
    const registerService = new RegisterService()
    const user = await registerService.userAll()

    return response.status(200).json({
      user,
      password_hash: undefined,
    })
  }
}
