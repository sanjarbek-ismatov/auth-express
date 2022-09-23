const app = require("express")();

require("./start/logger")();
require("./start/db")();
require("./start/routes")(app);
require("dotenv").config();
if (process.env.NODE_ENV === "production") {
  console.log = (x) => {
    return x;
  };
}

app.listen(process.env.PORT || 5000, () => console.log("Server ishlamoqda"));
