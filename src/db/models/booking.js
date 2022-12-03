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
            this.belongsTo(models.Rooms, {
                foreignKey: 'roomId',
                onUpdate: "cascade",
            });

            // this.hasMany(models.Users, {
            //     foreignKey: "createdBy",
            //     onDelete: "cascade",
            //     onUpdate: "cascade",
            // });
            // this.hasMany(models.Users, {
            //     foreignKey: "updatedBy",
            //     onDelete: "cascade",
            //     onUpdate: "cascade",
            // });
        }
    }
    room.init({
        startDate: DataTypes.DATE,
        endDate: DataTypes.DATE,
        actualStartDate: DataTypes.DATE,
        actualEndDate: DataTypes.DATE,

        description: DataTypes.STRING,

        roomId: DataTypes.INTEGER,

        status: DataTypes.STRING,

        createdBy: DataTypes.INTEGER,
        updatedBy: DataTypes.INTEGER,

        createdAt: DataTypes.DATE,
        updatedAt: DataTypes.DATE,
    }, {
        sequelize,
        tableName: "Booking",
        modelName: 'Booking',
    });
    return room;
};