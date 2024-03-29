'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rooms', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      type: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: "Room_Types",
          key: "id",
        },
        onUpdate: "cascade",
      },
      hotelId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Hotels",
          key: "id",
        },
        onUpdate: "cascade",
      },
      floor: {
        type: Sequelize.INTEGER,
        allowNull: false,
        validate: {
          min: 1,
        }
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      description: {
        type: Sequelize.STRING,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Rooms');
  }
};