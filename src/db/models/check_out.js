'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Check_Out extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsTo(models.Check_Ins, {
        foreignKey: "checkInId",
        onUpdate: "cascade",
      });
    }
  }
  Check_Out.init({
    employeeId: DataTypes.INTEGER,
    checkInId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Check_Outs',
  });
  return Check_Out;
};