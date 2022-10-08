const multer = require("multer");
const fs = require('fs');

const UploadFile = {
  single(folder, fieldName) {
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        const path = `./src/public/images/${folder}`;
        if (!fs.existsSync(path)) {
          fs.mkdirSync(path, { recursive: true });
        }
        cb(null, path);
      },
      filename: function (req, file, cb) {
        const { originalname } = file;
        const extention = originalname.slice(originalname.lastIndexOf("."));
        const realname = originalname.slice(0, originalname.lastIndexOf("."));
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9) + extention;
        cb(null, realname + "`" + uniqueSuffix);
      },
    });
    const upload = multer({ storage: storage }).single(fieldName);
    return upload;
  },
  multiple(folder, fieldName) {
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        const path = `./src/public/images/${folder}`;
        if (!fs.existsSync(path)) {
          fs.mkdirSync(path, { recursive: true });
        }
        cb(null, path);
      },
      filename: function (req, file, cb) {
        const { originalname } = file;
        const extention = originalname.slice(originalname.lastIndexOf("."));
        const realname = originalname.slice(0, originalname.lastIndexOf("."));
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9) + extention;
        cb(null, realname + "`" + uniqueSuffix);
      },
    });
    const upload = multer({ storage: storage }).array(fieldName);
    return upload;
  },
};
module.exports = UploadFile;
