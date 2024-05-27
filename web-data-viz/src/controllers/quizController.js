var quizModel = require("../models/quizModel");

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var pontuacao = req.body.pontuacaoServer;
    var fkUsuario = req.body.fkUsuarioServer;

    // Faça as validações dos valores
    if (pontuacao == undefined) {
        res.status(400).send("Sua pontuação está undefined!");
    } else if (fkUsuario == undefined) {
        res.status(400).send("A fk do usuário está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.cadastrar(fkUsuario, pontuacao)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao cadastrar a pontuação! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    cadastrar
}