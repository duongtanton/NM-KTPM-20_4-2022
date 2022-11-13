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
        await queryInterface.bulkInsert('Promotions', [
            {
                name: 'Springs',
                value_promotion: 30,
                status: "available",
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                name: 'Summers',
                value_promotion: 30,
                status: "available",
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                name: 'Autumn',
                value_promotion: 30,
                status: "available",
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                name: 'Winters',
                value_promotion: 30,
                status: "available",
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                name: 'Springs 2',
                value_promotion: 30,
                status: "available",
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                name: 'Summers 2',
                value_promotion: 30,
                status: "available",
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                name: 'Autumn 2',
                value_promotion: 30,
                status: "available",
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                name: 'Winters 2',
                value_promotion: 30,
                status: "available",
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
