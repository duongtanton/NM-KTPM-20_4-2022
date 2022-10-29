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
                id: 1,
                username: '1',
                password: '$2b$10$YRJnuXB/B4xdOToFFdsG8Ot6BQl2VyEAnXifanK7gPFRyFEgx5.iC',
                createdAt: new Date(),
                updatedAt: new Date(),
            }, {
                id: 2,
                username: '2',
                password: '$2b$10$6lR7Y8AqGCdQfDMB9ZKCiu3GI9XgY9NkXnL.RPHycxR5JMjVqOZmu',
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
