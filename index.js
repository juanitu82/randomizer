
require('dotenv').config({path:'./.env'})
const server1 = require('./src/app')
const port = process.env.PORT || 3001
const {conn} = require('./src/db')

conn.sync()
// conn.sync({force: true})
    .then(async () => {
        console.log("DB connected!");
        await server1.listen(port, () => console.log(`Server listening in port ${port}`))

    })
    .catch((error) => console.log(error))

