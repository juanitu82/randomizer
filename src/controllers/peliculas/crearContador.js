const { CachePeliculas, Contador } = require('../../db')



exports.crearContador = async (req, res, next) => {

try {
    const { generos, characters} = req.body

    const createMovie = await Contador.create({id:1, number: 0})

    // await createMovie.setGenres(generos)
    // await createMovie.setCharacters(characters)

    createMovie ? res.status(201).json('Character created') : res.status(404).send('Error. Couldnt create the character')

} catch (error) {
    next(error)
}
};