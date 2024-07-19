
const { terror, demasGeneros } = require('../../accesorios/moviesByGenre')
const peliculas = require('../../accesorios/peliculas')
const {buscarPelicula} = require('../../accesorios/buscarPeliculaPorNumero')
const tmdb = require('../../accesorios/tmdb')
const generarImagen = require('../../accesorios/generarImagen')
let peliculasBack = require('../../accesorios/peliculas_back')
let peliculasActuales = require('../../accesorios/peliculas2')

exports.getAllPeliculas = async (req, res, next) => {
    try {
        
        return res.json(peliculas.peliculas)  
        

    } catch (error) {
        next(error)
    }
};

exports.getPeliculasTerror = async (req, res, next) => {
    try {
        let peliculas = terror()
        console.log('Estas son las peliculas de terror en NUMEROS ' + peliculas.conteo)
        return res.json(peliculas.resultado)  
        

    } catch (error) {
        next(error)
    }
};

exports.getPeliculasDemasGeneros = async (req, res, next) => {
    try {
        let peliculas = demasGeneros()
        console.log('Estas son las demas peliculas RESTO de GENEROS en NUMEROS ' + peliculas.conteo)
        return res.json(peliculas.resultado)  
        

    } catch (error) {
        next(error)
    }
};

exports.peliculaAleatoria = async (req, res, next) => {
    try {
       
        let pelicula = await buscarPelicula()
        let {posterUrl, puntaje} = await tmdb(pelicula.title, pelicula.year)
        let response = await generarImagen(posterUrl)
       
        // console.log({...pelicula, link: posterUrl})
        res.render('movie', {
            movie: {
                ...pelicula,
                puntaje,
                link: posterUrl
            }
        });

    } catch (error) {
        next(error)
    }
};

exports.add_movie_terror = ( req, res, next ) => {
    
    try {
        // 2. Deberia recibir un -> 1) [ {title: ..., year: ..., genre: ...}, {title: ..., year: ..., genre: ...} ]

        let genero = req.params.terror
        console.log(`Cantidad de peliculas del genero ${genero}: ${peliculasActuales.terror} peliculas`)

        let peliculas = req.body

        // 1) Copiar originalArray en array_backup
        peliculasBack.terrorBackUp = [peliculasActuales.terror]
            
        // 2) Arrojar la longitud de originalArray
        // console.log("Longitud de originalArray:", peliculasActuales.peliculas[generoPeliculas].length);
    
        // 3) Agregar newArray a originalArray 
        let allMovies = peliculasActuales.terror
        allMovies.concat(peliculas);

        // 4) Crear un array ordenado

        const sortedMoviesArray = groupedMovies.sort((a, b) => a.title.localeCompare(b.title));
            
        console.log(sortedMoviesArray);
  
        // peliculasActuales.terror.sort((a, b) => a.title.localeCompare(b.title));
    
        // 6) Arrojar la longitud del array resultante
        console.log("Longitud del array resultante:", sortedMoviesArray);

        //7) Copiar el array a la BBDD

        peliculasActuales.terror = sortedMoviesArray
    
        // 5) Retornar el array resultante
        return sortedMoviesArray;   
    } catch (error) {
        next(error)
    }
}

exports.add_movie_otrosGeneros = (req, res, next) => {
    try {
        let genero = req.params.otros
        console.log(`Cantidad de peliculas del genero ${genero}: ${peliculasActuales.otrosGeneros} peliculas`)

        // 2. Deberia recibir un -> 1) [ {title: ..., year: ..., genre: ...}, {title: ..., year: ..., genre: ...} ]

        let peliculas = req.body

        // 1) Copiar originalArray en array_backup
        peliculasBack.otrosGenerosBackUp = [peliculasActuales.otrosGeneros]
            
        // 2) Arrojar la longitud de originalArray
        // console.log("Longitud de originalArray:", peliculasActuales.peliculas[generoPeliculas].length);
    
        // 3) Agregar newArray a originalArray 
        let allMovies = peliculasActuales.otrosGeneros
        allMovies.concat(peliculas);

        // 4) Agrupar las películas por género
        const groupedMovies = allMovies.reduce((acc, movie) => {
            if (!acc[movie.genre]) {
            acc[movie.genre] = [];
            }
            acc[movie.genre].push(movie);
            return acc;
        }, {});
        
        // 5) Crear un array ordenado
        const sortedMoviesArray = Object.keys(groupedMovies)
            .sort()
            .reduce((acc, genre) => {
            const sortedMovies = groupedMovies[genre].sort((a, b) => a.title.localeCompare(b.title));
            return acc.concat(sortedMovies);
            }, []);
        
        console.log(sortedMoviesArray);
    
        // peliculasActuales.terror.sort((a, b) => a.title.localeCompare(b.title));
    
        // 6) Arrojar la longitud del array resultante
        console.log("Longitud del array resultante:", sortedMoviesArray);

        //7) Copiar el array a la BBDD

        peliculasActuales.otrosGeneros = sortedMoviesArray
    
        // 5) Retornar el array resultante
        return sortedMoviesArray;   
    } catch (error) {
        next(error)
    }
}