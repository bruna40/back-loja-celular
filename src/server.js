import express from 'express'

const app = express()

const PORT = 3001

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.listen(PORT, function () {
  console.log('Server is running on port 3000')
})
