import { Router } from 'express'
import { UserController } from '../controllers/UserController.js'

const userRouter = Router()

userRouter.get('/users', UserController.userAll)
// userRouter.get('/users/:userId', UserController.userId)
userRouter.get('/users/email/:email', UserController.userEmail)
userRouter.post('/users', UserController.create)
userRouter.put('/users/:userId', UserController.updateUser)
userRouter.delete('/users/:userId', UserController.deleteUser)

export default userRouter
