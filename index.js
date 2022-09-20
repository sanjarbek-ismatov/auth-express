const app = require("express")();
require("./start/logger")();
require("./start/db")();
require("./start/routes")(app);
require("dotenv").config();

app.listen(process.env.PORT || 5000, () => console.log("Server ishlamoqda"));
