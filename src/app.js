import express from 'express'
import registerRouter from './http/routes/RegisterRouter.js'
import productRouter from './http/routes/ProductRouter.js'
import LoginRouter from './http/routes/LoginRouter.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())
app.use(LoginRouter, registerRouter, productRouter)

export default app
