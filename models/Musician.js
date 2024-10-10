const {db, DataTypes, Model} = require('../db');

// TODO - define the Band model

// WRITE YOUR CODE HERE

class Musician extends Model{};

Musician.init({
    name: DataTypes.STRING,
    instrument: DataTypes.STRING
},{
    sequelize: db,
    modelName: "band"
})

module.exports = {
    Musician
};



