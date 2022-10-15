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
        onUpdate: "cascade",
      });

      // this.hasOne(models.Users_Roles, {
      //   onUpdate: "cascade",
      // });

      this.belongsTo(models.Enterprises, {
        foreignKey: 'enterpriseId',
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
      avatarUrl: DataTypes.STRING,
      nickname: DataTypes.STRING,
      enterpriseId: DataTypes.INTEGER
    },
    {
      sequelize,
      modelName: "Users",
    }
  );
  return UserModel;
};