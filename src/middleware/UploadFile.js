const multer = require("multer");

const UploadFile = {
  single(folder, fieldName) {
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, `./public/images/" ${folder}`);
      },
      filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + "`" + uniqueSuffix);
      },
    });
    const upload = multer({ storage: storage }).single(fieldName);
    return upload;
  },
  multiple(folder, fieldName) {
    const storage = multer.diskStorage({
      destination: function (req, file, cb) {
        cb(null, `./public/images/" ${folder}`);
      },
      filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
        cb(null, file.fieldname + "`" + uniqueSuffix);
      },
    });
    const upload = multer({ storage: storage }).array(fieldName);
    return upload;
  },
};
module.exports = UploadFile;
