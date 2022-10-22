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
      this.belongsTo(models.types, {
        foreignKey: "typeId",
        onDelete: "cascade",
        onUpdate: "cascade",
      })
    }
  }
  room.init({
    name: DataTypes.STRING,
    floor: DataTypes.INTEGER,
    status: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'Rooms',
  });
  return room;
};