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
        await queryInterface.bulkInsert('hotels', [
            {
                id: 1,
                name: "Group 4",
                code: "group-4",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                name: "Group 4-1",
                code: "group-4-1",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 3,
                name: "Group 4-2",
                code: "group-4-2",
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
