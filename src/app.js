import express from 'express'
import registerRouter from './http/routes/registerRouter.js'

const app = express()
app.use(express.json())
app.use(registerRouter)

export default app
