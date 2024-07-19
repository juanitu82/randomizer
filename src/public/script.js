
document.addEventListener('DOMContentLoaded', () => { 
    fetch('/api/peliculas/create') 
        .then(response => {
            console.log(response)
            response.json()
        }) 
        .then(data => { 
            console.log(data)
            document.getElementById('title').textContent = data.title; 
            document.getElementById('link').src = data.link; 
            document.getElementById('genre').textContent = `Género: ${data.genre}`; 
            document.getElementById('year').textContent = `Año: ${data.year}`; 
        }) 
        .catch(error => console.error('Error:', error)); 
 
    document.getElementById('fetch-movie').addEventListener('click', () => { 
        window.location.href = 'http://localhost:3001/api/peliculas/create';  // Ajusta esta URL según tu endpoint para buscar la película 
    }); 
}); 