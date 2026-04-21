const processarPessoas = require("./pessoas");

const resultado = processarPessoas(
  { nome: "McLovin", idade: 17, altura: 1.60 },
  { nome: "KeydeCross", idade: 22, altura: 1.80 },
  { nome: "Bartô", idade: 19, altura: 1.68 }
);

console.log("Resultado:");
console.log(resultado);