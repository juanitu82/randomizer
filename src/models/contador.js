const {DataTypes, UUIDV4} = require('sequelize')
const validator = require('validator');


module.exports = (sequelize) => {
    return sequelize.define('Contador', {
        number: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
    }, 
)}