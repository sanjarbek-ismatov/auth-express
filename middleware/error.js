const winston = require("winston");

module.exports = (err, req, res, next) => {
  if (err) {
    winston.log(err.message);
    return res.status(500).send("Serverda xatolik yuz berdi :(");
  }
  next();
};
