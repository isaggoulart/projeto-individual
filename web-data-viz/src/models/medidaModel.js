var database = require("../database/config");

// function buscarUltimasMedidas(idAquario, limite_linhas) {

//     var instrucaoSql = `SELECT 
//         dht11_temperatura as temperatura, 
//         dht11_umidade as umidade,
//                         momento,
//                         DATE_FORMAT(momento,'%H:%i:%s') as momento_grafico
//                     FROM medida
//                     WHERE fk_aquario = ${idAquario}
//                     ORDER BY id DESC LIMIT ${limite_linhas}`;

//     console.log("Executando a instrução SQL: \n" + instrucaoSql);
//     return database.executar(instrucaoSql);
// }

function grafico1() {

    var instrucaoSql = `select tipoComida as TipoComida,  count(tipoComida) as Contagem
    from usuario
    group by tipoComida`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function grafico2() {

    var instrucaoSql = `SELECT 
    COUNT(CASE WHEN pontos <= 15 THEN 1 END) AS MenosMetade,
    COUNT(CASE WHEN pontos > 15 THEN 1 END) AS MaisMetade
FROM tentativa`;

    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

module.exports = {
    grafico1,
    grafico2
}
