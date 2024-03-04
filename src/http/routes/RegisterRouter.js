import { Router } from 'express'
import { RegisterController } from '../controllers/register.js'

const registerRouter = Router()

registerRouter.get('/users', RegisterController.userAll)
registerRouter.get('/users/:userId', RegisterController.userId)
registerRouter.post('/users', RegisterController.register)
registerRouter.put('/users/:userId', RegisterController.updateUser)
registerRouter.delete('/users/:userId', RegisterController.deleteUser)

export default registerRouter
