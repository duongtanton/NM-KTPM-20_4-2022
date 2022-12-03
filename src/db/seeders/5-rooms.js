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
        await queryInterface.bulkInsert('Rooms', [
            {
                id: 1,
                name: "Junior Suite 1",
                status: "available",
                type: 1,
                hotelId: 1,
                floor: Math.floor(Math.random() * 10) + 1,
                image: "https://thietkenoithat.com/Portals/0/DNNGo_PhotoAlbums/53503/9888/Phong%20Ngu%20Master%20(4).jpg",
                description: "Voucher GrandWorld hoặc Hotel Credit trị giá 500,000 VND/phòng/chặng ở (Hotel Credit không áp dụng cho đồ uống có cồn & dịch vụ Room Service)",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 2,
                name: "Junior Suite 2",
                status: "available",
                floor: Math.floor(Math.random() * 10) + 1,
                hotelId: 1,
                type: 2,
                image: "https://thietkenoithat.com/Portals/0/DNNGo_PhotoAlbums/53503/9888/Phong%20Ngu%20Master%20(4).jpg",
                description: "Voucher GrandWorld hoặc Hotel Credit trị giá 500,000 VND/phòng/chặng ở (Hotel Credit không áp dụng cho đồ uống có cồn & dịch vụ Room Service)",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 3,
                name: "Junior Suite 3",
                status: "available",
                hotelId: 1,
                type: 1,
                floor: Math.floor(Math.random() * 10) + 1,
                image: "https://thietkenoithat.com/Portals/0/DNNGo_PhotoAlbums/53503/9888/Phong%20Ngu%20Master%20(4).jpg",
                description: "Voucher GrandWorld hoặc Hotel Credit trị giá 500,000 VND/phòng/chặng ở (Hotel Credit không áp dụng cho đồ uống có cồn & dịch vụ Room Service)",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 4,
                name: "Junior Suite 4",
                status: "available",
                hotelId: 1,
                type: 4,
                floor: Math.floor(Math.random() * 10) + 1,
                image: "https://thietkenoithat.com/Portals/0/DNNGo_PhotoAlbums/53503/9888/Phong%20Ngu%20Master%20(4).jpg",
                description: "Voucher GrandWorld hoặc Hotel Credit trị giá 500,000 VND/phòng/chặng ở (Hotel Credit không áp dụng cho đồ uống có cồn & dịch vụ Room Service)",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 5,
                name: "Junior Suite 5",
                hotelId: 1,
                type: 2,
                status: "available",
                floor: Math.floor(Math.random() * 10) + 1,
                image: "https://thietkenoithat.com/Portals/0/DNNGo_PhotoAlbums/53503/9888/Phong%20Ngu%20Master%20(4).jpg",
                description: "Voucher GrandWorld hoặc Hotel Credit trị giá 500,000 VND/phòng/chặng ở (Hotel Credit không áp dụng cho đồ uống có cồn & dịch vụ Room Service)",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 6,
                name: "Junior Suite 6",
                status: "available",
                hotelId: 1,
                type: 1,
                floor: Math.floor(Math.random() * 10) + 1,
                image: "https://thietkenoithat.com/Portals/0/DNNGo_PhotoAlbums/53503/9888/Phong%20Ngu%20Master%20(4).jpg",
                description: "Voucher GrandWorld hoặc Hotel Credit trị giá 500,000 VND/phòng/chặng ở (Hotel Credit không áp dụng cho đồ uống có cồn & dịch vụ Room Service)",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
            {
                id: 7,
                name: "Junior Suite 7",
                status: "available",
                hotelId: 1,
                type: 3,
                floor: Math.floor(Math.random() * 10) + 1,
                image: "https://thietkenoithat.com/Portals/0/DNNGo_PhotoAlbums/53503/9888/Phong%20Ngu%20Master%20(4).jpg",
                description: "Voucher GrandWorld hoặc Hotel Credit trị giá 500,000 VND/phòng/chặng ở (Hotel Credit không áp dụng cho đồ uống có cồn & dịch vụ Room Service)",
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
