const express = require("express");
const app = express();
const db = require("./models");
const initRoutes = require("./routes/tutorial.routes");

app.use(express.urlencoded({ extended: true }));
initRoutes(app);

db.sequelize.sync();

let port = 8080;
app.listen(port, () => {
  console.log(`Running at localhost:${port}`);
});
