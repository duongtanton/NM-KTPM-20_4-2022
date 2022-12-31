const { Model, where } = require("sequelize");
const db = require("../../db/models/index.js");
const { CONSTANT, Response, Message, MESSAGE, ROOM_STATUS, ResponseApi } = require("../../common");
const bcrypt = require("../../util/bcrypt.js");
const moment = require("moment/moment.js");
const { Rooms, Room_Types, Booking, Hotels } = db;
const HotelController = {
    async show(req, res, next) {
        try {
            const { id } = req.params;
            const hotel = await Hotels.findOne(
                { where: { id: id } },
                { raw: true }
            );
            const infoHotel = hotel.dataValues;
            if(!infoHotel.avatarUrl){
                infoHotel.avatarUrl = 'assets//admin//default.jpg';
            }
            const rooms = await Rooms.findAll(
                {
                    where: {hotelId: infoHotel.id},
                    include: [{
                        model: Room_Types,
                        attributes: ['name', 'price', 'bedNumber']
                      }]
                },
                
                {raw : true},
            );
            const roomsData = rooms.map(room =>{
                const roomInfo = room.dataValues;
                return {
                    id: roomInfo.id,
                    name: roomInfo.name,
                    type: roomInfo.type,
                    floor: roomInfo.floor,
                    status: roomInfo.status,
                    hotelId: roomInfo.hotelId,
                    image: roomInfo.image,
                    description: roomInfo.description,
                    roomTypeName: roomInfo.Room_Type.dataValues.name,
                    roomTypeBed: roomInfo.Room_Type.dataValues.bedNumber,
                    roomTypePrice: roomInfo.Room_Type.dataValues.price,
                };
            });
            console.log(infoHotel);
            res.render("./users/hotel/hotelDetail", Response(res, 1, null, {infoHotel: infoHotel, rooms: roomsData}));
        } catch (err) {
            console.log(err); 
            res.json(Response(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")));
        }
    },
};
module.exports = HotelController;
