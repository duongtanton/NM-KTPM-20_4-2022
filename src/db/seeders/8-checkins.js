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
        await queryInterface.bulkInsert('Check_Ins', [
            {
                id: 1,
                employeeId: 1,
                userId: 2,
                roomId: 1,
                checkInTime: '2022-11-18',
                checkOutTime: '2022-11-20',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                employeeId: 1,
                userId: 3,
                roomId: 2,
                checkInTime: '2022-11-18',
                checkOutTime: '2022-11-20',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 3,
                employeeId: 5,
                userId: 4,
                roomId: 4,
                checkInTime: '2022-11-18',
                checkOutTime: '2022-11-20',
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 4,
                employeeId: 5,
                userId: 3,
                roomId: 5,
                checkInTime: '2022-11-18',
                checkOutTime: '2022-11-20',
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
