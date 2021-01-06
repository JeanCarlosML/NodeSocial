const express = require("express");
const router = express.Router();
const response = require("../../../network/response");
const Controller = require("./controller");
// Para ruta /api/user
router.get("/", (req, res) => {
  const lista = Controller.list();
  response.success(req, res, lista, 200);
});

module.exports = router;
