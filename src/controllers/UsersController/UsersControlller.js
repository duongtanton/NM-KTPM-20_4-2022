const { Model } = require("sequelize");
const db = require("../../db/models/index.js");
const { CONSTANT } = require("../../common/index.js");
const bcrypt = require("../../util/bcrypt.js");
const UserController = {
  async index(req, res, next) {
    const { Users, Roles, Users_Roles } = db;
    // Roles.create({
    //   code: "User",
    //   name: "Người dùng",
    // })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    Users.create({
      username: "Duong Tan Ton",
      password: "12345678910",
    })
      .then((result) => {})
      .catch((error) => {});

    // Users_Roles.create({
    //   userId: 1,
    //   roleId: 2,
    // })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    // Roles.destroy({
    //   where: {
    //     id: 2,
    //   },
    // })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

    Promise.all([
      Users.findOne({
        where: { id: 1 },
        include: Roles,
      }),
      Roles.findOne({
        where: { id: 1 },
        include: {
          model: Users,
        },
      }),
      Users_Roles.findOne({
        where: { id: 1 },
        include: [Users, Roles],
      }),
    ])
      .then((result) => {
        res.json(result);
      })
      .catch((error) => {
        res.json(error);
      });

    // Promise.all([bcrypt.hash("Tonduong", CONSTANT.SALT_ROUNDS)])
    //   .then((result) => {
    //     return bcrypt.compare("Tonduong", result[0]);
    //   })
    //   .then((result) => {
    //     res.send(result);
    //   })
    //   .catch((error) => {
    //     res.send(error);
    //   });
  },
  async create(req, res, next) {
    res.send("create");
  },
  async store(req, res, next) {
    res.send("store");
  },
  async show(req, res, next) {
    res.send("show");
  },
  async edit(req, res, next) {
    res.send("edit");
  },
  async update(req, res, next) {
    res.send("update");
  },
  async destroy(req, res, next) {
    res.send("destroy");
  },
};
module.exports = UserController;
