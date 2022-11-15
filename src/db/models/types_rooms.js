'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class types extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Rooms, {
        foreignKey: "id",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
    }
  }
  types.init({
    name: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    bedNumber: DataTypes.INTEGER,
    roomNumber: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Room_Types',
  });
  return types;
};