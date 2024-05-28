var express = require("express");
var router = express.Router();

var metricasController = require("../controllers/metricasController");

router.get("/listar", function (req, res) {
    metricasController.listar(req, res);
});

router.get("/listar2", function (req, res) {
    metricasController.listar2(req, res);
});


module.exports = router;