const express = require("express");
const app = express();
const routes = require("./src/routes");
const { User } = require("./src/models");
app.use("/", routes);
app.listen(5000, () => {
  console.log("Server is running on port 3000");
});
