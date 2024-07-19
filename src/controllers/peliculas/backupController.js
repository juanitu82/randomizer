let {terrorBackUp, otrosGenerosBackUp} = require('../../accesorios/peliculas_back')
let { terror, otrosGeneros} = require('../../accesorios/peliculas2')

exports.backUp = async (req, res, next) => {
    try {
        console.log(`La BBDD de terror tiene ${terror.length} peliculas y la de los demas generos tiene ${otrosGeneros.length} peliculas`)
        terrorBackUp = terror;
        otrosGenerosBackUp = otrosGeneros;
        console.log(`La BBDD de Backup de terror tiene ${terrorBackUp.length} peliculas y la de los demas generos backup tiene ${otrosGenerosBackUp.length} peliculas`)
        res.json('El backup se realizo correctamente')

    } catch (error) {
        next(error)
    }
}

exports.backupVerTerror = async (req, res, next) => {
    try {
        console.log(`La BBDD de terror tiene ${terrorBackUp.length}`)
        res.json(terrorBackUp)

    } catch (error) {
        next(error)
    }
}

exports.backupVerDemas = async (req, res, next) => {
    try {
        console.log(`La BBDD de otros generos tiene ${otrosGenerosBackUp.length}`)
        res.json(otrosGenerosBackUp)

    } catch (error) {
        next(error)
    }
}