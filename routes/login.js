const express = require("express");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { loginValidator } = require("../start/validator");
const jwt = require("jsonwebtoken");
const router = express.Router();
router.post("/", async (req, res) => {
  const { error } = loginValidator(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }
  const user = await User.findOne({ email: req.body.email });
  const checkedPassword = bcrypt.compare(req.body.password, user.password);
  if (!checkedPassword) {
    return res.status(404).send("Nimadir xato!");
  }
  const token = jwt.sign({ _id: user._id }, "MAXFIY_KALIT");
  res.status(200).setHeader("x-token", token).send("Bajarildi!");
});
module.exports = router;
