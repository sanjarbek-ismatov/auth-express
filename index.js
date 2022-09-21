const app = require("express")();
app.set("view engine", "ejs");
require("./start/logger")();
require("./start/db")();
require("./start/routes")(app);
require("dotenv").config();
if (process.env.NODE_ENV === "production") {
  console.log = (x) => {
    return x;
  };
}
app.get("/", (req, res) => {
  res.render("index", { name: "Sanjarbek" });
});
app.listen(process.env.PORT || 5000, () => console.log("Server ishlamoqda"));
