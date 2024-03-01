import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const Login = sequelize.define('Login', {
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

export default Login
