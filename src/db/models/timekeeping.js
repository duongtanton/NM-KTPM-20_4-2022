'use strict';
const {
    Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class room extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    room.init({
        hotelId: DataTypes.INTEGER,
        description: DataTypes.STRING,
        createdBy: DataTypes.INTEGER,
        updatedBy: DataTypes.INTEGER,
    }, {
        sequelize,
        modelName: 'Timekeeping',
        tableName: 'Timekeeping'
    });
    return room;
};