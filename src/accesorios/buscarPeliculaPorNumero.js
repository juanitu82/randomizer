const {numeroAleatorio} = require('./numeroAleatorio')
const { terror, demasGeneros} = require('./moviesByGenre')
const {
    getIterador,
    incrementIterador,
    resetIterador
} = require('./cachePeliculas');
const {gestionarPeliculas} = require('./consultaCachePeliculas')
const { CachePeliculas, Contador } = require('../db')
const misPeliculas = require('../accesorios/peliculas2')


exports.buscarPelicula = async () => {
    // numero aleatorio por ahora entre 1 y 601

        let iterador = await CachePeliculas.count();
        let contador = await Contador.findByPk(1);
        let ultimaEntrada 
        await CachePeliculas.findAll({
            limit: 1,
            order: [ [ 'createdAt', 'DESC' ]]
        }).then( data => ultimaEntrada = data[0].dataValues.genre )
        
        // 1. Nos traemos la cantidad de peliculas posibles dependiendo si son de terror u otros generos
        let numeroTerror = terror().conteo
        let numeroOtrosGeneros = demasGeneros().conteo

        // 2. Generamos secuencia y buscamos un numero entre el universo de peliculas posibles (terror/demas generos)
        // Tmb buscamos con ese numero generado la pelicula
        let numeroPelis, numero, peliculaSeleccionada;
        const secuencia = ['terror', 'otro', 'otro', 'terror', 'otro', 'otro', 'terror', 'otro', 'otro', 'terror'];
       
        if(contador.dataValues.number === 10 || contador.dataValues.number > 10) {
           
            await Contador.update({number:0}, {where: {id:1}});
        }
        if(secuencia[contador.dataValues.number] === 'terror') { 
            
            numero = numeroAleatorio(misPeliculas.terror.length);
            peliculaSeleccionada = misPeliculas.terror[numero];
            let resultado = await gestionarPeliculas({ title: peliculaSeleccionada.title, year: peliculaSeleccionada.year, genre: 'terror' }); 
            await contador.increment('number',{by:1})
            
          
            return resultado
        }else {
          
            numero = numeroAleatorio(misPeliculas.otrosGeneros.length);
            
            let peliculasFiltradas = misPeliculas.otrosGeneros.filter(pelicula => pelicula.genre !== ultimaEntrada)
           
            peliculaSeleccionada = peliculasFiltradas[numero];
            
            let resultado =  await gestionarPeliculas({ title: peliculaSeleccionada.title, year: peliculaSeleccionada.year, genre: peliculaSeleccionada.genre });
            
            await contador.increment('number',{by:1})
            return resultado
        }

}
