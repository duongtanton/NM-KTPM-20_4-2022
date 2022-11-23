'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Employee extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
            // this.belongsTo(models.types, {
            //   foreignKey: "typeId",
            //   onDelete: "cascade",
            //   onUpdate: "cascade",
            // })
        }
    }
    Employee.init({
        fullname: DataTypes.STRING,
        username: DataTypes.STRING,
        avatar: DataTypes.STRING,
        password: DataTypes.STRING || "123456",
    }, {
        sequelize,
        modelName: 'Employees',
    });
    return Employee;
};