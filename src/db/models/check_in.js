'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Check_In extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Check_In.init({
    employeeId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    roomId: DataTypes.INTEGER,
    checkInTime: DataTypes.DATE,
    checkOutTime: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Check_Ins',
  });
  return Check_In;
};