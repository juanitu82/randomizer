
const { CachePeliculas, Contador } = require('../db')

exports.gestionarPeliculas = async (pelicula)  => {
    
    const peliculasUtilizadas = await CachePeliculas.findAll();

    // 1. Verificar si la película ya está en el array
    const peliculaExiste = peliculasUtilizadas.some(p => p.title === pelicula.title && p.genre === pelicula.genre);
    
    if (peliculaExiste) {
        return `Ya se utilizó la película: ${pelicula.title}`;
    }
    
    // 2. Si la longitud del array es de 19 o inferior, agregar la película
    if (peliculasUtilizadas.length <= 19) {
        await CachePeliculas.create(pelicula)

        return {title: pelicula.title, year: pelicula.year, genre: pelicula.genre}
    }

    // 3. Si la longitud del array es igual a 20, eliminar todo el contenido y agregar la nueva película
    if (peliculasUtilizadas.length === 20) {
        await CachePeliculas.destroy({
            truncate: true,
        })
        await CachePeliculas.create(pelicula)

        return {title: pelicula.title, year: pelicula.year, genre: pelicula.genre}
    }
}