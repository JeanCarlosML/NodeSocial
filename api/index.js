const express = require("express");
const config = require("../config.js");
const swaggerUi = require("swagger-ui-express");
const user = require("./components/user/network");
const app = express();
//Middelweards
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//Router
app.use("/api/user", user);

app.listen(config.api.port, () => {
  console.log("Api escuchando en el puerto", config.api.port);
});
