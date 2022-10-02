const { CONSTANT } = require("../common/index.js");
const bcrypt = require("bcrypt");

module.exports = {
  hash(value) {
    const salt = bcrypt.genSaltSync(CONSTANT.SALT_ROUNDS);
    return bcrypt.hashSync(value, salt);
  },
  compare(text, textHash) {
    return bcrypt.compareSync(text, textHash);
  },
};
