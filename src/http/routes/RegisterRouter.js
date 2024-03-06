import { Router } from 'express'
import { UserController } from '../controllers/UserController.js'
import { authenticate } from '../middleware/auth.js'

const userRouter = Router()
userRouter.use(authenticate)

userRouter.get('/users', UserController.userAll)
userRouter.get('/users/:email', UserController.userEmail)
userRouter.post('/users', UserController.create)
userRouter.put('/users/:userId', UserController.updateUser)
userRouter.delete('/users/:userId', UserController.deleteUser)

export default userRouter
