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
        await queryInterface.bulkInsert('Booking', [
            {
                id: 1,
                roomId: 1,
                hotelId: 1,
                createdBy: 2,
                updatedBy: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                roomId: 2,
                hotelId: 1,
                createdBy: 3,
                updatedBy: 3,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 3,
                roomId: 3,
                hotelId: 1,
                createdBy: 2,
                updatedBy: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 4,
                roomId: 4,
                hotelId: 2,
                createdBy: 4,
                updatedBy: 4,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 5,
                roomId: 5,
                hotelId: 2,
                createdBy: 3,
                updatedBy: 3,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 6,
                roomId: 6,
                hotelId: 3,
                createdBy: 2,
                updatedBy: 2,
                createdAt: new Date(),
                updatedAt: new Date(),
            },
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
