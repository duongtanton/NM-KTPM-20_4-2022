const { Model } = require("sequelize");
const db = require("../../db/models/index.js");
const { CONSTANT, ROLES, Response, Message, MESSAGE } = require("../../common/index.js");
const bcrypt = require("../../util/bcrypt.js");
const jwt = require('jsonwebtoken');
const {Hotels} = db;

const SearchController = {

  async show(req, res, next) {
    try {
      const name_Search = req.body.HotelName;
      console.log(name_Search);
      const hotels = await Hotels.findAll({
        raw: true,
      });

      res.render('./search',Response(res, 1, null, { hotels, name_Search }));
    } catch(err){
      res.status(500).json(err);
    }
  },

};

module.exports = SearchController;
