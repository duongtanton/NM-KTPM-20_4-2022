"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Users", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      avatarUrl: {
        type: Sequelize.STRING,
      },
      username: {
        type: Sequelize.STRING,
      },
      nickname: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING,
      },
      name: {
        type: Sequelize.STRING,
      },
      phone: {
        type: Sequelize.STRING,
      },
      password: {
        type: Sequelize.STRING,
      },
      type: {
        type: Sequelize.STRING,
      },
      status: {
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      enterpriseId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Enterprises",
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
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Users");
  },
};
