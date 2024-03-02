import { z } from 'zod'
import { RegisterService } from '../../services/resgister.js'
import { PrismaUsersRepository } from '../../repositories/prisma-users-repository.js'

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
    return response.status(409).send()
  }

  return response.status(201).send()
}
