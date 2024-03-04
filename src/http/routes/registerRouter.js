import { Router } from 'express'
import { RegisterController } from '../controllers/register.js'

const registerRouter = Router()

registerRouter.get('/users', RegisterController.userAll)
registerRouter.get('/users/:userId', RegisterController.userId)
registerRouter.post('/users', RegisterController.register)

export default registerRouter
