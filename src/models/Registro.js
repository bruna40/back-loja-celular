import { DataTypes } from 'sequelize'
import sequelize from '../config/database.js'

const Registro = sequelize.define('Registro', {
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  senha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
})

export default Registro
