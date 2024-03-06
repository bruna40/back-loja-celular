import jwt from 'jsonwebtoken'
import { secret } from '../../tokens/jsonSecret.js'

async function authenticate(request, response, next) {
  const token = request.headers.authorization
  if (!token) {
    return response.status(401).send({ message: 'Token não encontrado' })
  }
  const [, acessToken] = token.split(' ')
  try {
    jwt.verify(acessToken, secret)
    const { id, email } = jwt.decode(acessToken)
    request.userId = id
    request.email = email
    return next()
  } catch (error) {
    return response.status(401).send({ message: error.message })
  }
}

export { authenticate }
