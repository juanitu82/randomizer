const {DataTypes, UUIDV4} = require('sequelize')
const validator = require('validator');


module.exports = (sequelize) => {
    return sequelize.define('CachePeliculas', {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        genre: { type: DataTypes.STRING,
                allowNull: false
        },
    }, 
)}