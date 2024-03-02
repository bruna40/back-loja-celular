import { z } from 'zod'
import { RegisterService } from '../../services/resgister.js'
import { PrismaUsersRepository } from '../../repositories/prisma-users-repository.js'
import { UserAlreadyExistsError } from '../../services/errors/user-already-exists.js'

export async function register(request, response) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string().email(),
    password: z.string().min(6),
  })

  const { name, email, password } = registerBodySchema.parse(request.body)
  try {
    const prismaUsersRepository = new PrismaUsersRepository()
    const registerService = new RegisterService(prismaUsersRepository)
    await registerService.execute({ name, email, password })
  } catch (error) {
    if (error instanceof UserAlreadyExistsError) {
      return response.status(409).send({ message: error.message })
    }

    throw error
  }

  return response.status(201).send()
}

export async function profile(request, response) {
  const prismaUsersRepository = new PrismaUsersRepository()
  const registerService = new RegisterService(prismaUsersRepository)
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
