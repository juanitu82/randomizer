const axios = require('axios')
const fs = require('fs');
const path = require('path');


async function generarImagen (url) {
    try {
        const imageUrl = url; // Reemplaza esto con la URL de la imagen de la API
        const response = await axios.get(url, { responseType: 'stream' });

        if (response.headers['content-type'].includes('image/jpeg')) {
            const imagePath = path.resolve(__dirname, 'downloaded_image.jpg');
            const writer = fs.createWriteStream(imagePath);
      
            response.data.pipe(writer);
      
            writer.on('finish', () => {
              // console.log('Imagen descargada con éxito:', imagePath);
            });
      
            writer.on('error', (err) => {
              console.error('Error al descargar la imagen:', err);
            });
          } else {
            console.error('El contenido recibido no es una imagen.');
          }
        return response
   
      } catch (error) {
        console.error(error);
   
      }
}

module.exports = generarImagen