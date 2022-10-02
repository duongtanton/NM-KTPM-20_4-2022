"use strict";
const { bcrypt } = require("../../util");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserModel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Roles, {
        through: "users_roles",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
      this.hasOne(models.Users_Roles, {
        foreignKey: "userId",
        onDelete: "cascade",
        onUpdate: "cascade",
      });
    }
  }
  UserModel.init(
    {
      username: DataTypes.STRING,
      password: {
        type: DataTypes.STRING,
        set(value) {
          const hash = bcrypt.hash(value);
          this.setDataValue("password", hash);
        },
      },
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return UserModel;
};
