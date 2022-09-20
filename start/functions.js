const User = require("../models/User");
const bcrypt = require("bcrypt");
async function createUser(body) {
  const salt = await bcrypt.genSalt();
  const hashed = await bcrypt.hash(body.password, salt);

  const user = await new User(body);
  user.password = hashed;
  user.save();
}
module.exports.createUser = createUser;
