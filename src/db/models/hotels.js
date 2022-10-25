'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class hotels extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  hotels.init({
    name: DataTypes.STRING,
    code: DataTypes.STRING,
    roomAmount: DataTypes.INTEGER,
    employeeAmount: DataTypes.INTEGER,
    avatarUrl: DataTypes.STRING,
    backgoundUrl: DataTypes.STRING,
    hotelAddress: DataTypes.STRING,
    isActived: DataTypes.BOOLEAN,
    description: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Hotels',
  });
  return hotels;
};