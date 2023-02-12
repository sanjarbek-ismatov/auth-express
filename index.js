const express = require("express");
const app = express();
require("./start/logger")();
// require("./start/db")();
require("./start/routes")(app);
require("./production")(app);
require("dotenv").config();
app.use(express.static("client"));
app.get("/", (req, res) => {
  res.render("index");
});
if (process.env.NODE_ENV === "production") {
  console.log = (x) => {
    return x;
  };
}

app.listen(process.env.PORT, () => console.log("Server ishlamoqda"));
