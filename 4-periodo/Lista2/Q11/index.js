const gerarRelatorio = require("./relatorioFinal");

const resultado = gerarRelatorio(
  { nome: "Adevaldo", idade: 20, compras: [100, 50, 30] },
  { nome: "Juninho", idade: 25, compras: [200, 80] },
  { nome: "Etevaldo", idade: 30, compras: [150, 150, 100] }
);

console.log("Relatório final:");
console.log(resultado);