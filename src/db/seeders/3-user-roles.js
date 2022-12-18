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
        await queryInterface.bulkInsert('Users_Roles', [
            {
                userId: 1,
                roleId: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                userId: 1,
                roleId: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                userId: 2,
                roleId: 4,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                userId: 3,
                roleId: 4,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                userId: 4,
                roleId: 4,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                userId: 5,
                roleId: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                userId: 5,
                roleId: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                userId: 6,
                roleId: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                userId: 6,
                roleId: 2,
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
