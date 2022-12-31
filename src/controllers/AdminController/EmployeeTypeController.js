const { Model } = require("sequelize");
const db = require("../../db/models/index.js");
const { CONSTANT, ResponseApi, Message, MESSAGE, ROLES_ID, Response } = require("../../common/index.js");
const bcrypt = require("../../util/bcrypt.js");
const fs = require('fs');
const { Employee_Types } = db;
const EmployeeTypeController = {
  async index(req, res, next) {
    const { _user } = res.locals
    try {
      const employeeTypes = await Employee_Types.findAll({
        where: {
          hotelId: _user.hotelId
        },
        raw: true,
      });
      res.render("./admin/employee-type", Response(res, 0, null, { employeeTypes }));
    } catch (err) {
      res.json(ResponseApi(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")));
    }
  },
  async create(req, res, next) {
    try {
      const { name, status, description } = req.body;
      const { _user } = res.locals
      const employeeType = await Employee_Types.create({
        name,
        status,
        description,
        hotelId: _user.hotelId
      })
        .then(data => {
          res.redirect("back");
        })
        .catch(error => {
          res.json(ResponseApi(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")))
        });
    } catch (err) {
      res.json(ResponseApi(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")))
    }
  },
  async store(req, res, next) {
    res.render("./admin/employee-type");
  },
  async show(req, res, next) {
    try {
      const { id } = req.params;
      const { view } = req.query;
      const employeeType = await Employee_Types.findOne(
        {
          where: { id: id },
          raw: true
        },
      );
      if (view) {
        res.status(200).json({
          ...employeeType,
        });
      } else {
        res.render("./admin/employee-type/view", { user: employeeType });
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

      const employeeType = await Employee_Types.update(
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
  async update(req, res, next) {
    res.render("./admin/employee-type");
  },
  async destroy(req, res, next) {
    try {
      const { id } = req.params;
      // let urlImg;
      // const roomById = await Users.findOne({ where: { id, } });
      // urlImg = 'src/' + roomById.toJSON().image;

      const employeeType = await Employee_Types.destroy({ where: { id, } });
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

      const employeeType = await Employee_Types.destroy({ where: { id: idList, } });
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
module.exports = EmployeeTypeController;
