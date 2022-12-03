'use strict';
const {
  Model
} = require('sequelize');
const types_rooms = require('./types_rooms');
module.exports = (sequelize, DataTypes) => {
  class room extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Room_Types, {
        foreignKey: "type",
        onUpdate: "cascade",
      });

      this.hasMany(models.Booking, {
        onDelete: "cascade",
        onUpdate: "cascade",
      });
    }
  }
  room.init({
    name: DataTypes.STRING,
    type: DataTypes.INTEGER,
    floor: DataTypes.INTEGER,
    status: DataTypes.STRING,
    hotelId: DataTypes.INTEGER,
    image: DataTypes.STRING,
    description: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Rooms',
  });
  return room;
};