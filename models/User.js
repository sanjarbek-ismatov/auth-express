const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  username: String,
  email: String,
  birth: Date,
  gender: {
    type: String,
    enum: ["Male", "Female"],
  },
  password: String,
});
export const User = mongoose.model("user", userSchema);
