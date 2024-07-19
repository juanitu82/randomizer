const server = require('express').Router()
const peliculasControllers = require('../controllers/peliculas/peliculaController')
const contadorControllers = require('../controllers/peliculas/crearContador')
const backUpControllers = require('../controllers/peliculas/backupController')


server.get('/', peliculasControllers.getAllPeliculas)

server.get('/terror', peliculasControllers.getPeliculasTerror)

server.get('/demas', peliculasControllers.getPeliculasDemasGeneros)

server.get('/create', peliculasControllers.peliculaAleatoria)

// server.get('/createImagen', )

// server.get('/:id', movieControllers.getMovieById)

server.post('/backup', backUpControllers.backUp)

server.get('/backup-terror', backUpControllers.backupVerTerror)

server.get('/backup-otros', backUpControllers.backupVerDemas)

server.post('/contador', contadorControllers.crearContador)

server.put('/agregar/:terror', peliculasControllers.add_movie_terror)

server.put('/agregar/:otros', peliculasControllers.add_movie_otrosGeneros)

// server.put('/:id/update', movieControllers.putMovie)

// server.delete('/:id/delete', movieControllers.deleteMovie)

module.exports = server