const alunos = require("./alunos");
const gerarRelatorio = require("./relatorio");

const relatorio = gerarRelatorio(alunos);

console.log("Relatório:");
console.log(relatorio);