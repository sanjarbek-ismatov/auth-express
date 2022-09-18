const { registerValidator } = require("../start/validator");

const router = require("express").Router();
router.post("/", (req, res) => {
  const { error } = registerValidator(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  res.status(200).send(true);
});
module.exports = router;
