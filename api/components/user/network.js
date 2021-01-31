//El Network solo se comunica con el controlador
const { Router } = require("express");
const router = Router();
const secure = require("./secure");
const response = require("../../../network/response");
const Controller = require("./index");
//Routes para ruta /api/user
router.get("/", list);
router.get("/:id", get);
router.post("/", upsert);
router.put("/", secure("update"), upsert);

function list(req, res) {
  Controller.list()
    .then((lista) => {
      response.success(req, res, lista, 200);
    })
    .catch((err) => {
      response.error(req, res, err.message, 500);
    });
}
function get(req, res) {
  Controller.get(req.params.id)
    .then((user) => {
      response.success(req, res, user, 200);
    })
    .catch((err) => {
      response.success(req, res, err.message, 500);
    });
}
function upsert(req, res) {
  Controller.upsert(req.body)
    .then((user) => {
      response.success(req, res, user, 201);
    })
    .catch((err) => {
      response.success(req, res, err.message, 500);
    });
}
module.exports = router;