'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class EmployeeType extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association heren
    }
  }
  EmployeeType.init({
    typeId: DataTypes.INTEGER,
    typeName: DataTypes.STRING,
    isActived: DataTypes.BOOLEAN,
    description: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Employee_Types',
  });
  return EmployeeType;
};