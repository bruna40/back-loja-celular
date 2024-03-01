import express from 'express'
import { env } from './env/index.js'

const app = express()

app.listen(env.PORT, () => {
  console.log('Server is running on port 3333')
})
