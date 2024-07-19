let peliculasActuales = require('./peliculas')

//el genero a ingresar seria un string entre accion, argentinas, comedias, fantastico, aventura, csFiccion, thriller, misterio, deporte, policial, historia, reales, biopics, romanticas, musica,
    //  cineNoir, belicas, drama, terror

const genre = ( genero ) => {
return peliculasActuales.peliculas[genero]
}

const terror = () => {
    
        // Crea un nuevo objeto que solo contenga el género especificado
        const resultado = {};
        let conteo = 0

        if (peliculasActuales.peliculas['terror']) {
            resultado['terror'] = peliculasActuales.peliculas['terror'];
        }

        conteo = peliculasActuales.peliculas['terror'].length

        return {resultado,conteo}; 
}

const demasGeneros = () => {
    
    
    
        // Crea un nuevo objeto excluyendo el género especificado
        const resultado = {};

        let conteo = 0

        for (const key in peliculasActuales.peliculas) {
            if (key !== 'terror') {
                resultado[key] = peliculasActuales.peliculas[key];
                conteo += peliculasActuales.peliculas[key].length
            }
        }
        return {resultado, conteo};
    
}

const conteoPeliculas = () => {
    let conteo = 0

    for (const key in peliculasActuales.peliculas) {
        
           
            conteo += peliculasActuales.peliculas[key].length
        
    }

    return conteo
}

module.exports = { genre, terror, demasGeneros, conteoPeliculas}