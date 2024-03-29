const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: String,
  email: {
    type: String,
    unique: true,
  },
  birth: Date,
  gender: {
    type: String,
    enum: ["Male", "Female"],
  },
  password: String,
});
const User = mongoose.model("user", userSchema);
module.exports = User;
