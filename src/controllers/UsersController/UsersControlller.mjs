import { Model } from "sequelize";
import db from "../../db/models/index.js";

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

    // Users.create({
    //   username: "Duong Tan Ton",
    //   password: "12345678910",
    // })
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });

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
        console.log("Oke");
        res.json(result);
      })
      .catch((error) => {
        console.log("Error");
        res.json(error);
      });
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
export default UserController;
