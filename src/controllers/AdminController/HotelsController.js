const { Model } = require("sequelize");
const db = require("../../db/models/index.js");
const { CONSTANT, ResponseApi, Message, MESSAGE, ROLES_ID, Response } = require("../../common/index.js");
const bcrypt = require("../../util/bcrypt.js");
const fs = require('fs');
const { Hotels, Users, Users_Roles } = db;
const HotelsController = {
  async index(req, res, next) {
    const { _user } = res.locals
    try {
      const hotels = await Hotels.findAll({
        where: {
        },
        raw: true,
      });
      res.render("./admin/hotel", Response(res, 0, null, { hotels }));
    } catch (err) {
      console.log(err);
      res.json(ResponseApi(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")));
    }
  },
  async create(req, res, next) {
    try {
      const { phone, email, name, address, status, description } = req.body;
      const { _user } = res.locals
      const hotelOld = await Users.findOne({
        where: {
          username: phone || email,
        },
        raw: true
      })
      if (!!hotelOld) {
        return res.render("./admin/hotel", Response(res, 0, Message(MESSAGE.ERROR, "Phone was used for a nother acounnt"), null));
      }
      const user = await Hotels.create({
        phone,
        email,
        name,
        address,
        status,
        description,
      })
        .then(data => {
          return Promise.all([
            Users.create({
              username: phone || email,
              password: "123456",
              hotelId: data.id
            }),
            data
          ])
        })
        .then(datas => {
          return Users_Roles.create({
            userId: datas[0].id,
            hotelId: datas[1].id
          })
        })
        .then(_result => {
          res.redirect("back");
        })
        .catch(error => {
          res.json(ResponseApi(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")))
          console.log(error);
        });
    } catch (err) {
      res.json(ResponseApi(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")))
    }
  },
  async store(req, res, next) {
    res.render("./admin/hotel");
  },
  async show(req, res, next) {
    try {
      const { id } = req.params;
      const { view } = req.query;
      const hotel = await Hotels.findOne(
        {
          where: { id: id },
          raw: true
        },
      );
      if (view) {
        res.status(200).json({
          ...hotel,
        });
      } else {
        res.render("./admin/hotel/view", { hotel });
      }
    } catch (err) {
      res.json(ResponseApi(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")))
    }
  },
  async edit(req, res, next) {
    try {
      const { id } = req.params;
      // let path, urlImg;

      // if (req.file) {
      //     path = req.file.path;
      //     const roomById = await Users.findOne({ where: { id, } });
      //     urlImg = 'src/' + roomById.toJSON().image;
      // }
      // const data = path
      //     ? {
      //         ...req.body,
      //         image: path.split("\\").slice(1).join("//"),
      //     }
      //     : req.body;

      const data = req.body;

      const user = await Hotels.update(
        data, {
        where: { id }
      })

      // if (urlImg && fs.lstatSync(urlImg).isFile()) {
      //     fs.unlinkSync(urlImg);
      // }
      res.redirect("back")
      // res.json(ResponseApi(res, 1, Message(MESSAGE.SUCCESS, "Update room successfully!!!")));
    } catch (err) {
      res.json(ResponseApi(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")));
    }
  },
  async editShow(req, res, next) {
    try {
      const { id } = req.params;
      const hotel = await Hotels.findOne({
        where: { id },
        raw: true
      })

      // if (urlImg && fs.lstatSync(urlImg).isFile()) {
      //     fs.unlinkSync(urlImg);
      // }

      res.render("./admin/hotel/edit", Response(res, 0, null, { hotel }));

      // res.json(ResponseApi(res, 1, Message(MESSAGE.SUCCESS, "Update room successfully!!!")));
    } catch (err) {
      console.log(err);
      res.json(ResponseApi(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")));
    }
  },
  async update(req, res, next) {
    res.render("./admin/hotel");
  },
  async destroy(req, res, next) {
    try {
      const { id } = req.params;
      // let urlImg;
      // const roomById = await Users.findOne({ where: { id, } });
      // urlImg = 'src/' + roomById.toJSON().image;

      const room = await Hotels.destroy({ where: { id, } });
      // if (urlImg && fs.lstatSync(urlImg).isFile()) {
      //     fs.unlinkSync(urlImg);
      // }
      res.json(ResponseApi(res, 1, Message(MESSAGE.SUCCESS, "Delete room successfully!!!")));
    }
    catch (err) {
      res.json(ResponseApi(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")));
    }
  },
  async destroyMultiple(req, res, next) {
    try {
      const { idList } = req.body;
      // let urlImgs = [];
      // const roomById = await Users.findAll({ where: { id: idList } });
      // urlImgs = roomById.map(room => 'src/' + room.toJSON().image);

      const rooms = await Hotels.destroy({ where: { id: idList, } });
      // if (urlImgs.length > 0) {
      //     urlImgs.forEach((urlImg) => {
      //         if (fs.lstatSync(urlImg).isFile()) {
      //             fs.unlinkSync(urlImg);
      //         }
      //     })
      // }
      res.json(ResponseApi(res, 1, Message(MESSAGE.SUCCESS, "Delete rooms successfully!!!")));
    } catch (err) {
      res.json(ResponseApi(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")));
    }
  },
};
module.exports = HotelsController;
