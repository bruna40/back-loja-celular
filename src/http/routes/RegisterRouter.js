import { Router } from 'express'
import { UserController } from '../controllers/UserController.js'
import { authenticate } from '../middleware/auth.js'

const userRouter = Router()

userRouter.post('/users', UserController.create)

userRouter.get('/users', authenticate, UserController.userAll)
userRouter.get('/users/:userId', authenticate, UserController.getById)
userRouter.put('/users/:userId', authenticate, UserController.updateUser)
userRouter.delete('/users/:userId', authenticate, UserController.deleteUser)

export default userRouter
