const { Sequelize } = require('sequelize')
const cachePeliculasModel = require('./models/peliculas')
const contadorModel = require('./models/contador')
const {DB_USER, DB_HOST, DB_PASS, DB_NAME} = process.env

const sequelize = new Sequelize(`postgres://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}:5433/${process.env.DB_NAME}`, {  
    logging: false,
    native: false,
})

cachePeliculasModel(sequelize)
contadorModel(sequelize)

//Destructuring de modelos

const {CachePeliculas, Contador} = sequelize.models

module.exports = {
    conn: sequelize,
  ...sequelize.models,
}