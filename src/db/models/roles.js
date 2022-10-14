"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class RolesModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Users, {
        through: "users_roles",
        onUpdate: "cascade",
      });

      // this.hasOne(models.Users_Roles, {
      //   onUpdate: "cascade",
      // });
    }
  }
  RolesModel.init(
    {
      code: DataTypes.STRING,
      name: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Roles",
    }
  );
  return RolesModel;
};
