var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

// router.get("/ultimas/:idAquario", function (req, res) {
//     medidaController.buscarUltimasMedidas(req, res);
// });

router.get("/grafico1", function (req, res) {
    medidaController.grafico1(req, res);
})

router.get("/grafico2", function (req, res) {
    medidaController.grafico2(req, res);
})

module.exports = router;