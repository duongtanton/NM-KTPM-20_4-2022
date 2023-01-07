'use strict';

// const { bcrypt } = require('../../util');

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
        await queryInterface.bulkInsert('Users', [
            {
                id: 100,
                username: '100',
                enterpriseId: 1,
                hotelId: 1,
                password: '$2b$10$YRJnuXB/B4xdOToFFdsG8Ot6BQl2VyEAnXifanK7gPFRyFEgx5.iC', //1
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 1,
                username: '1',
                enterpriseId: 1,
                hotelId: 1,
                password: '$2b$10$YRJnuXB/B4xdOToFFdsG8Ot6BQl2VyEAnXifanK7gPFRyFEgx5.iC', //1
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                username: '2',
                enterpriseId: 1,
                hotelId: 1,
                password: '$2b$10$6lR7Y8AqGCdQfDMB9ZKCiu3GI9XgY9NkXnL.RPHycxR5JMjVqOZmu', //1
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 3,
                username: '3',
                enterpriseId: 1,
                hotelId: 1,
                password: '$2b$10$6lR7Y8AqGCdQfDMB9ZKCiu3GI9XgY9NkXnL.RPHycxR5JMjVqOZmu', //1
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 4,
                username: '4',
                enterpriseId: 1,
                hotelId: 1,
                password: '$2b$10$6lR7Y8AqGCdQfDMB9ZKCiu3GI9XgY9NkXnL.RPHycxR5JMjVqOZmu', //1
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 5,
                username: '5',
                enterpriseId: 2,
                hotelId: 2,
                password: '$2b$10$YRJnuXB/B4xdOToFFdsG8Ot6BQl2VyEAnXifanK7gPFRyFEgx5.iC', //1
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 6,
                username: '6',
                enterpriseId: 3,
                hotelId: 3,
                password: '$2b$10$YRJnuXB/B4xdOToFFdsG8Ot6BQl2VyEAnXifanK7gPFRyFEgx5.iC', //1
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
