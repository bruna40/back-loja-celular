import { Router } from 'express'
import { register } from '../controllers/register.js'

const registerRouter = Router()

registerRouter.post('/users', register)

export default registerRouter
