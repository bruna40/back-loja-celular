import express from 'express'
import registerRouter from './http/routes/RegisterRouter.js'
import productRouter from './http/routes/ProductRouter.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(cors())

app.use(registerRouter)
app.use(productRouter)

export default app
