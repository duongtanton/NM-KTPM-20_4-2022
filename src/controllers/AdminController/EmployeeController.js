const { Model } = require("sequelize");
const db = require("../../db/models/index.js");
// <<<<<<< HEAD
// const { CONSTANT, Response, Message, MESSAGE } = require("../../common/index.js");
// const bcrypt = require("../../util/bcrypt.js");
// const { Employees } = db;
// const EmployeeController = {
//     async index(req, res, next) {
//         try {
//             const employees = await Employees.findAll({
//                 raw: true,
//             });
//             console.log(employees);
//             res.render("./admin/employees", Response(res, 1, null, { employees }));
//         } catch (err) {
//             res.json(Response(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")));
// =======
const { CONSTANT, ResponseApi, Message, MESSAGE, ROLES_ID, Response } = require("../../common/index.js");
const bcrypt = require("../../util/bcrypt.js");
const fs = require('fs');
const { Users, Users_Roles } = db;
const EmployeeController = {
    async index(req, res, next) {
        const { _user } = res.locals
        try {
            const users = await Users.findAll({
                where: {
                    hotelId: _user.hotelId
                },
                raw: true,
            });
            res.render("./admin/employee", Response(res, 0, null, { users }));
        } catch (err) {
            res.json(ResponseApi(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")));
        }
    },
    async create(req, res, next) {
        try {
            // <<<<<<< HEAD
            //             const { fullname, username, password } = req.body;
            //             const { path } = req.file;
            //             console.log("create aaaaaaaaaaaaaa");
            //             const employee = await Employees.create({
            //                 fullname,
            //                 username,
            //                 password,
            //                 avatar: path.split("\\").slice(1).join("//"),
            //             });
            //             res.json(ResponseApi(res, 1, Message(MESSAGE.SUCCESS, "Create employee successfully!!!")))
            // =======
            const { phone, email, name, type, status, description } = req.body;
            const { _user } = res.locals
            const userOld = await Users.findOne({
                where: {
                    username: phone || email,
                },
                raw: true
            })
            if (!!userOld) {
                return res.render("./admin/employee", Response(res, 0, Message(MESSAGE.ERROR, "Phone was used for a nother acounnt"), null));
            }
            const user = await Users.create({
                username: phone || email,
                password: "123456",
                phone,
                email,
                name,
                type,
                status,
                description,
                hotelId: _user.hotelId
            })
                .then(data => {
                    return Users_Roles.create({
                        roleId: ROLES_ID.USER,
                        userId: data.id
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
        // <<<<<<< HEAD
        //         res.render("./admin/employees");
        // =======
        res.render("./admin/employee");
    },
    async show(req, res, next) {
        try {
            const { id } = req.params;
            // <<<<<<< HEAD
            //             const employee = await Employees.findOne(
            //                 { where: { id: id } },
            //                 { raw: true }
            //             );
            //             const infoEmployee = employee.toJSON();
            //             res.status(200).json({
            //                 ...infoEmployee,
            //                 avatar: req.protocol + '://' + req.headers.host + "/" + infoEmployee.avatar,
            //             });
            // =======
            const { view } = req.query;
            const user = await Users.findOne(
                {
                    where: { id: id },
                    raw: true
                },
            );
            if (view) {
                res.status(200).json({
                    ...user,
                });
            } else {
                res.render("./admin/employee/view", { user });
            }
        } catch (err) {
            res.json(ResponseApi(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")))
        }
    },
    async edit(req, res, next) {
        try {
            const { id } = req.params;
            // <<<<<<< HEAD
            //             let path, urlImg;

            //             if (req.file) {
            //                 path = req.file.path;
            //                 const employeeById = await Employees.findOne({ where: { id, } });
            //                 urlImg = 'src/' + employeeById.toJSON().avatar;
            //             }
            //             const data = path
            //                 ? {
            //                     ...req.body,
            //                     avatar: path.split("\\").slice(1).join("//"),
            //                 }
            //                 : req.body;

            //             const employee = await Employees.update(
            //                 data, {
            //                 where: { id, }
            //             })

            //             if (urlImg && fs.lstatSync(urlImg).isFile()) {
            //                 fs.unlinkSync(urlImg);
            //             }

            //             res.json(ResponseApi(res, 1, Message(MESSAGE.SUCCESS, "Update employee successfully!!!")));
            // =======
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

            const user = await Users.update(
                data,
                {
                    where: { id }
                }
            )

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
        // <<<<<<< HEAD
        //         res.render("./admin/employees");
        // =======
        res.render("./admin/employee");
    },
    async destroy(req, res, next) {
        try {
            const { id } = req.params;
            // <<<<<<< HEAD
            //             let urlImg;
            //             const employeeById = await Employees.findOne({ where: { id, } });
            //             urlImg = 'src/' + employeeById.toJSON().avatar;

            //             const employee = await Employees.destroy({ where: { id, } });
            //             if (urlImg && fs.lstatSync(urlImg).isFile()) {
            //                 fs.unlinkSync(urlImg);
            //             }
            //             res.json(ResponseApi(res, 1, Message(MESSAGE.SUCCESS, "Delete employee successfully!!!")));
            // =======
            // let urlImg;
            // const roomById = await Users.findOne({ where: { id, } });
            // urlImg = 'src/' + roomById.toJSON().image;

            const room = await Users.destroy({ where: { id, } });
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
            // <<<<<<< HEAD
            //             let urlImgs = [];
            //             const employeeById = await Employees.findAll({ where: { id: idList } });
            //             urlImgs = employeeById.map(employee => 'src/' + employee.toJSON().avatar);

            //             const employees = await Employees.destroy({ where: { id: idList, } });
            //             if (urlImgs.length > 0) {
            //                 urlImgs.forEach((urlImg) => {
            //                     if (fs.lstatSync(urlImg).isFile()) {
            //                         fs.unlinkSync(urlImg);
            //                     }
            //                 })
            //             }
            //             res.json(ResponseApi(res, 1, Message(MESSAGE.SUCCESS, "Delete employees successfully!!!")));
            // =======
            // let urlImgs = [];
            // const roomById = await Users.findAll({ where: { id: idList } });
            // urlImgs = roomById.map(room => 'src/' + room.toJSON().image);

            const rooms = await Users.destroy({ where: { id: idList, } });
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
// <<<<<<< HEAD
// module.exports = EmployeeController;
// =======
module.exports = EmployeeController;
