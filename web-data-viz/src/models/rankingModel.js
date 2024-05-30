var database = require("../database/config");

function verRanking() {
    var instrucaoSql = `select usuario.nome as Usuário,
    tentativa.pontos as Pontuação
    from tentativa join usuario on fkUsuario = id
    order by pontos desc
    limit 10;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    verRanking
}