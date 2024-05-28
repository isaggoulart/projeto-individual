var metricasModel = require("../models/metricasModel");

function listar(req, res) {
    metricasModel.listar()
    .then(function (resultado) {
        res.json(resultado);
    })
    .catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function listar2(req, res) {
    metricasModel.listar2()
    .then(function (resultado) {
        res.json(resultado);
    })
    .catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}



module.exports = {
    listar,
    listar2
}