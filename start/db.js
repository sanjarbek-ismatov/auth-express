const mongoose = require("mongoose");
module.exports = function () {
  mongoose
    .connect("mongodb://localhost/auth")
    .then(() => console.log("MongoDB ulandi"));
};
