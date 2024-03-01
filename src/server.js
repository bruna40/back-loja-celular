import express from 'express'
import { env } from './env/index.js'
import sequelize from './config/database.js'

const app = express()
app.use(express.json())

sequelize.sync().then(() => {
  app.listen(env.PORT, () => {
    console.log('Server is running on port 3333')
  })
})
