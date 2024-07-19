const axios = require('axios')




async function getMoviePoster(title, year) {
    try {
        // Buscar la película por título y año
        const response = await axios.get(`${process.env.BASE_URL}/search/movie`, {
            params: {
                api_key: process.env.API_KEY,
                query: title,
                year: year
            }
        });
        if (response.data.results.length > 0) {
            const movie = response.data.results[0];
           
            const posterPath = movie.poster_path;
            const puntaje = movie.vote_average;

            // Construir la URL completa del póster
            const posterUrl = `https://image.tmdb.org/t/p/w500${posterPath}`;
            return {posterUrl,puntaje};
        } else {
            return 'No se encontró la película';
        }
    } catch (error) {
        console.error(error);
        return 'Error al buscar la película';
    }
}

module.exports = getMoviePoster
