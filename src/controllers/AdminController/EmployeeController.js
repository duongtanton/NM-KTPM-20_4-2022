const { Model } = require("sequelize");
const db = require("../../db/models/index.js");
const { CONSTANT, Response, Message, MESSAGE } = require("../../common/index.js");
const bcrypt = require("../../util/bcrypt.js");
const { Employees } = db;
const EmployeeController = {
    async index(req, res, next) {
        try {
            const employees = await Employees.findAll({
                raw: true,
            });
            console.log(employees);
            res.render("./admin/employees", Response(res, 1, null, { employees }));
        } catch (err) {
            res.json(Response(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")));
        }
    },
    async create(req, res, next) {
        try {
            const { fullname, username, password } = req.body;
            const { path } = req.file;
            console.log("create aaaaaaaaaaaaaa");
            const employee = await Employees.create({
                fullname,
                username,
                password,
                avatar: path.split("\\").slice(1).join("//"),
            });
            res.json(ResponseApi(res, 1, Message(MESSAGE.SUCCESS, "Create employee successfully!!!")))
        } catch (err) {
            res.json(ResponseApi(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")))
        }
    },
    async store(req, res, next) {
        res.render("./admin/employees");
    },
    async show(req, res, next) {
        try {
            const { id } = req.params;
            const employee = await Employees.findOne(
                { where: { id: id } },
                { raw: true }
            );
            const infoEmployee = employee.toJSON();
            res.status(200).json({
                ...infoEmployee,
                avatar: req.protocol + '://' + req.headers.host + "/" + infoEmployee.avatar,
            });
        } catch (err) {
            res.json(ResponseApi(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")))
        }
    },
    async edit(req, res, next) {
        try {
            const { id } = req.params;
            let path, urlImg;

            if (req.file) {
                path = req.file.path;
                const employeeById = await Employees.findOne({ where: { id, } });
                urlImg = 'src/' + employeeById.toJSON().avatar;
            }
            const data = path
                ? {
                    ...req.body,
                    avatar: path.split("\\").slice(1).join("//"),
                }
                : req.body;

            const employee = await Employees.update(
                data, {
                where: { id, }
            })

            if (urlImg && fs.lstatSync(urlImg).isFile()) {
                fs.unlinkSync(urlImg);
            }

            res.json(ResponseApi(res, 1, Message(MESSAGE.SUCCESS, "Update employee successfully!!!")));
        } catch (err) {
            res.json(ResponseApi(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")));
        }
    },
    async update(req, res, next) {
        res.render("./admin/employees");
    },
    async destroy(req, res, next) {
        try {
            const { id } = req.params;
            let urlImg;
            const employeeById = await Employees.findOne({ where: { id, } });
            urlImg = 'src/' + employeeById.toJSON().avatar;

            const employee = await Employees.destroy({ where: { id, } });
            if (urlImg && fs.lstatSync(urlImg).isFile()) {
                fs.unlinkSync(urlImg);
            }
            res.json(ResponseApi(res, 1, Message(MESSAGE.SUCCESS, "Delete employee successfully!!!")));
        }
        catch (err) {
            res.json(ResponseApi(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")));
        }
    },
    async destroyMultiple(req, res, next) {
        try {
            const { idList } = req.body;
            let urlImgs = [];
            const employeeById = await Employees.findAll({ where: { id: idList } });
            urlImgs = employeeById.map(employee => 'src/' + employee.toJSON().avatar);

            const employees = await Employees.destroy({ where: { id: idList, } });
            if (urlImgs.length > 0) {
                urlImgs.forEach((urlImg) => {
                    if (fs.lstatSync(urlImg).isFile()) {
                        fs.unlinkSync(urlImg);
                    }
                })
            }
            res.json(ResponseApi(res, 1, Message(MESSAGE.SUCCESS, "Delete employees successfully!!!")));
        } catch (err) {
            res.json(ResponseApi(res, 1, Message(MESSAGE.ERROR, "Sometime wrong. Try again!!!")));
        }
    },
};
module.exports = EmployeeController;