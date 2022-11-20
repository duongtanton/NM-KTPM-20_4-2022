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
        await queryInterface.bulkInsert('Employees', [
            {
                id: 1,
                fullname: 'Johny Tonny',
                username: "johnTN",
                password: "123456",
                avatar: "https://i.redd.it/dh5otp8kcf741.png",
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                id: 2,
                fullname: 'Peter Park 2',
                username: "peterP",
                password: "123456",
                avatar: "https://i.redd.it/dh5otp8kcf741.png",
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                id: 3,
                fullname: 'Peter Park 3',
                username: "peterP",
                password: "123456",
                avatar: "https://i.redd.it/dh5otp8kcf741.png",
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                id: 4,
                fullname: 'Peter Park 4',
                username: "peterP",
                password: "123456",
                avatar: "https://i.redd.it/dh5otp8kcf741.png",
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                id: 5,
                fullname: 'Peter Park 5',
                username: "peterP",
                password: "123456",
                avatar: "https://i.redd.it/dh5otp8kcf741.png",
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                id: 6,
                fullname: 'Peter Park 6',
                username: "peterP",
                password: "123456",
                avatar: "https://i.redd.it/dh5otp8kcf741.png",
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                id: 7,
                fullname: 'Peter Park 7',
                username: "peterP",
                password: "123456",
                avatar: "https://i.redd.it/dh5otp8kcf741.png",
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