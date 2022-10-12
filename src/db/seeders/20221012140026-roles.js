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
        code: 'Admin',
        name: 'Quản trị viên',
      }, {
        code: 'Enterprise',
        name: 'Doanh nghiệp',
      }, {
        code: 'Admin',
        name: 'Nhân viên',
      },
      {
        code: 'User',
        name: 'Người dùng',
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
