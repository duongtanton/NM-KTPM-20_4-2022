"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("Booking", {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            },
            startDate: {
                type: Sequelize.DATE,
            },
            endDate: {
                type: Sequelize.DATE
            },
            actualStartDate: {
                type: Sequelize.DATE
            },
            actualEndDate: {
                type: Sequelize.DATE
            },
            description: {
                type: Sequelize.STRING
            },
            status: {
                type: Sequelize.STRING
            },
            roomId: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Rooms",
                    key: "id",
                },
                onUpdate: "cascade",
            },
            createdBy: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Users",
                    key: "id",
                },
                onUpdate: "cascade",
            },

            updatedBy: {
                type: Sequelize.INTEGER,
                references: {
                    model: "Users",
                    key: "id",
                },
                onUpdate: "cascade",
            },

            createdAt: {
                type: Sequelize.DATE,
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE,
            },
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("Booking");
    },
};
