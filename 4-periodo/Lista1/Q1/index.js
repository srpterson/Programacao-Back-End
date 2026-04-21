const { soma, subtracao, multiplicacao, divisao } = require("./math");

const numero1 = 10;
const numero2 = 2;

console.log("Soma:", soma(numero1, numero2));
console.log("Subtração:", subtracao(numero1, numero2));
console.log("Multiplicação:", multiplicacao(numero1, numero2));
console.log("Divisão:", divisao(numero1, numero2));