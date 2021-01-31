//El Network solo se comunica con el controlador
const { Router } = require("express");
const router = Router();
const response = require("../../../network/response");
const Controller = require("./auth-index");
//Routes para ruta /api/user
router.post("/login", login);

function login(req, res) {
  Controller.login(req.body.username, req.body.password)
    .then((token) => {
      response.success(req, res, token, 200);
    })
    .catch((err) => {
      response.error(req, res, "Informacion invalida", 400);
    });
}
module.exports = router;
