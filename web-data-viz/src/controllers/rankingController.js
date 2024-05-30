var rankingModel = require("../models/rankingModel");

function verRanking(req, res) {
    rankingModel.verRanking()
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
    verRanking
}