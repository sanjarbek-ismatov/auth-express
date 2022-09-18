const mongoose = require("mongoose");
module.exports = function () {
  mongoose.connect("mongodb://localhost/auth", () =>
    console.log("mongodb connected")
  );
};
