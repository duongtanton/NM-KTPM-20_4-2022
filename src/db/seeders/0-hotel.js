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
                name: "Group 04",
                code: "group-4",
                address: "HCMUS, Thu Duc District, HCM city",
                avatarUrl: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.agoda.com%2Fvi-vn%2Favatar-hotel%2Fhotel%2Fda-nang-vn.html&psig=AOvVaw3s00hC7HsdGww_PA-gwjcn&ust=1672027693513000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCNi119fyk_wCFQAAAAAdAAAAABAE",
                roomAmount: 10,
                phone: "0972228119",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                name: "Marriott International.",
                code: "Marriott International.",
                address: "Maryland",
                avatarUrl: "https://cbest.vn/wp-content/uploads/2017/09/Ks_Marriott.jpg",
                roomAmount: 12,
                phone: "0952128119",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 3,
                name: "Hilton Worldwide",
                code: "Hilton Worldwide",
                address: "Virginia state",
                avatarUrl: "https://cbest.vn/wp-content/uploads/2017/09/Hotel_exteriora_at_night__Hilton_Hanoi_Opera_1.jpg",
                roomAmount: 28,
                phone: "0972228412",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 4,
                name: "InterContinental Hotels Group (IHG)",
                code: "InterContinental Hotels Group (IHG)",
                address: "Denham",
                avatarUrl: "https://cbest.vn/wp-content/uploads/2017/09/Hotel_exteriora_at_night__Hilton_Hanoi_Opera_1.jpg",
                roomAmount: 42,
                phone: "0972209719",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 5,
                name: "Accor Hotels",
                code: "Accor Hotels",
                address: "Paris",
                avatarUrl: "https://cbest.vn/wp-content/uploads/2017/09/4_20Novotel.jpg",
                roomAmount: 20,
                phone: "0912128119",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 6,
                name: "Hilton Worldwide",
                code: "Hilton Worldwide",
                address: "New Jersey",
                avatarUrl: "https://cbest.vn/wp-content/uploads/2017/09/Hotel_exteriora_at_night__Hilton_Hanoi_Opera_1.jpg",
                roomAmount: 20,
                phone: "0912128119",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 7,
                name: "Wyndham Hotel Group",
                code: "Wyndham Hotel Group",
                address: "New Jersey",
                avatarUrl: "https://cbest.vn/wp-content/uploads/2017/09/6-1.png",
                roomAmount: 20,
                phone: "0912128119",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 8,
                name: "Choice Hotels International",
                code: "Choice Hotels International",
                avatarUrl: "https://cbest.vn/wp-content/uploads/2017/09/Hotel_exteriora_at_night__Hilton_Hanoi_Opera_1.jpg",
                roomAmount: 20,
                phone: "0912128119",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 9,
                name: "Plateno Hotels Group",
                code: "Plateno Hotels Group",
                avatarUrl: "https://cbest.vn/wp-content/uploads/2017/09/Hotel_exteriora_at_night__Hilton_Hanoi_Opera_1.jpg",
                roomAmount: 20,
                phone: "0912128119",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 10,
                name: "Starwood Hotels & Resorts Worldwide",
                code: "Starwood Hotels",
                avatarUrl: "https://cbest.vn/wp-content/uploads/2017/09/Hotel_exteriora_at_night__Hilton_Hanoi_Opera_1.jpg",
                roomAmount: 20,
                phone: "0912128119",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 11,
                name: "Shanghai Jin Jiang International",
                code: "Shanghai Jin Jiang International",
                avatarUrl: "https://cbest.vn/wp-content/uploads/2017/09/SJ-1.png",
                roomAmount: 20,
                phone: "0912128119",
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
