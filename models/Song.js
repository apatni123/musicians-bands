const {db, DataTypes, Model} = require('../db');

// TODO - define the Band model

// WRITE YOUR CODE HERE

class Song extends Model{};

Song.init({
    title: DataTypes.STRING,
    year: DataTypes.NUMBER,
    length:DataTypes.NUMBER
},{
    sequelize: db,
    modelName: "band"
})

module.exports = {
    Song
};



