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
                avatarUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.agoda.com%2Fvi-vn%2Favatar-hotel%2Fhotel%2Fda-nang-vn.html&psig=AOvVaw3s00hC7HsdGww_PA-gwjcn&ust=1672027693513000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNi119fyk_wCFQAAAAAdAAAAABAE",
                roomAmount: 20,
                phone: "0972228119",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                name: "Group 4-1",
                code: "group-4-1",
                avatarUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.agoda.com%2Fvi-vn%2Favatar-hotel%2Fhotel%2Fda-nang-vn.html&psig=AOvVaw3s00hC7HsdGww_PA-gwjcn&ust=1672027693513000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNi119fyk_wCFQAAAAAdAAAAABAE",
                roomAmount: 20,
                phone: "0972228119",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 3,
                name: "Group 4-2",
                code: "group-4-2",
                avatarUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.agoda.com%2Fvi-vn%2Favatar-hotel%2Fhotel%2Fda-nang-vn.html&psig=AOvVaw3s00hC7HsdGww_PA-gwjcn&ust=1672027693513000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNi119fyk_wCFQAAAAAdAAAAABAE",
                roomAmount: 20,
                phone: "0972228119",
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
