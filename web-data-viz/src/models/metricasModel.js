var database = require("../database/config");

function listar() {
    var instrucaoSql = `select tipoComida
    from usuario group by tipoComida
    order by count(*) desc 
    limit 1;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function listar2() {
    var instrucaoSql = `select truncate(avg(pontos), 0) from tentativa;`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}



module.exports = {
    listar,
    listar2
}