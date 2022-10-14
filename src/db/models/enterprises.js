'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Enterprises extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Users, {
        onDelete: "cascade",
        onUpdate: "cascade",
      });
    }
  }
  Enterprises.init({
    name: DataTypes.STRING,
    avatarUrl: DataTypes.STRING,
    code: DataTypes.STRING,
    name: DataTypes.STRING,
    localtion: DataTypes.STRING,
    email: DataTypes.STRING,
    phone: DataTypes.STRING,
    description: DataTypes.STRING,
    verified: {
      type: DataTypes.BOOLEAN,
      defaultValue: false,
    },
  }, {
    sequelize,
    modelName: 'Enterprises',
  });
  return Enterprises;
};