'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('roles', [
      {
        id: 1,
        code: 'Admin',
        name: 'Admin',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: 2,
        code: 'Enterprise',
        name: 'Enterprise',
        createdAt: new Date(),
        updatedAt: new Date(),
      }, {
        id: 3,
        code: 'Staff',
        name: 'Staff',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        id: 4,
        code: 'User',
        name: 'User',
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
