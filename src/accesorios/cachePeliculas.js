let peliculasUtilizadas = [];
let iterador = 0;

const getPeliculasUtilizadas = () => peliculasUtilizadas;
const addPeliculaUtilizada = (pelicula) => peliculasUtilizadas.push(pelicula);
const resetPeliculasUtilizadas = () => peliculasUtilizadas = [ ];

const getIterador = () => iterador;
const incrementIterador = () => iterador++;
const resetIterador = () => iterador = 0;



// addPeliculaUtilizada({title: 'tale of 2 sisters', genre: 'terror'})
// incrementIterador()

// console.log(getPeliculasUtilizadas())
// console.log(getIterador())


module.exports = {
    getPeliculasUtilizadas,
    addPeliculaUtilizada,
    resetPeliculasUtilizadas,
    getIterador,
    incrementIterador,
    resetIterador
};
