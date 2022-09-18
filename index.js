const app = require("express")();

require("./start/db")();
require("./start/routes")(app);
require("dotenv").config();
app.listen(process.env.PORT || 5000, () => console.log("server working"));
