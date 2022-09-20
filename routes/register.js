const { registerValidator } = require("../start/validator");

const { createUser } = require("../start/functions");
const router = require("express").Router();
router.post("/", async (req, res) => {
  const { error } = registerValidator(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  await createUser(req.body);
  res.status(200).send(true);
});
module.exports = router;
