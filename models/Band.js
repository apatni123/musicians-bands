const {db, DataTypes, Model} = require('../db');

// TODO - define the Band model

// WRITE YOUR CODE HERE

class Band extends Model{};

Band.init({
    name: DataTypes.STRING,
    genre: DataTypes.STRING
},{
    sequelize: db,
    modelName: "band"
})

module.exports = {
    Band
};



