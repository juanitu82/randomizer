const server = require('express').Router()

const peliculasRoutes = require('./peliculasRoutes')


server.use('/peliculas', peliculasRoutes)

module.exports = server