const express = require("express");
const auth = require("../middleware/auth");
const Post = require("../models/Post");
const router = express.Router();
router.post("/create", auth, async (req, res) => {
  await new Post({
    title: req.body.title,
    body: req.body.body,
    author: req.token,
  }).save();
  res.status(201).send("Joylandi!");
});

module.exports = router;
