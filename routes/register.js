const { registerValidator } = require("../start/validator");

const { createUser } = require("../start/functions");
const User = require("../models/User");
const router = require("express").Router();
router.post("/", async (req, res) => {
  const { error } = registerValidator(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  const checkedEmail = await User.findOne({ email: req.body.email });
  const checkedUser = await User.findOne({ username: req.body.username });
  if (checkedEmail || checkedUser) {
    return res.status(400).send("Email yoki username allaqachon olingan");
  }
  await createUser(req.body);
  res.status(200).send("Muvaffaqiyatli!");
});
module.exports = router;
