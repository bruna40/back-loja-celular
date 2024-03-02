import { Router } from 'express'
import { register, profile } from '../controllers/register.js'

const registerRouter = Router()

registerRouter.post('/users', register)
registerRouter.get('/users/:userId', profile)

export default registerRouter
