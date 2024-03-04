import express from 'express'
import registerRouter from './http/routes/registerRouter.js'
import cors from 'cors'

const app = express()
app.use(express.json())
app.use(registerRouter)
app.use(cors())

export default app
