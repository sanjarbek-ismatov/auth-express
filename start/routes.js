const sign = require("../routes/register");
const express = require("express");
const error = require("../middleware/error");
const cors = require("cors");
module.exports = (app) => {
  app.use(
    cors({
      exposedHeaders: "x-token",
    })
  );
  app.use(express.json());
  app.use(express.urlencoded({ extended: false }));
  app.use("/api/register", sign);
  app.use(error);
};
