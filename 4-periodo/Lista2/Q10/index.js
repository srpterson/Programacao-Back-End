const avaliarIMC = require("./imc");

const resultado = avaliarIMC(
  { nome: "Maria Eduarda", peso: 50, altura: 1.60 },
  { nome: "Caio", peso: 85, altura: 1.75 },
  { nome: "Vitinho", peso: 95, altura: 1.68 }
);

console.log("Resultado:");
console.log(resultado);