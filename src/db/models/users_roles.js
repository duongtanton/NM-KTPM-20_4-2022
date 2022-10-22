"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class users_rolesModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // this.belongsTo(models.Users, {
      //   foreignKey: "userId",
      //   onUpdate: "cascade",
      // });

      // this.belongsTo(models.Roles, {
      //   foreignKey: "roleId",
      //   onUpdate: "cascade",
      // });
    }
  }
  users_rolesModel.init(
    {
      roleId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Users_Roles",
    }
  );
  return users_rolesModel;
};
