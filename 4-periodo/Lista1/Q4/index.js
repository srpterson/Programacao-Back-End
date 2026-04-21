const { converterDolarParaReal } = require("./cambio");

const valorEmDolar = 100;
const valorConvertido = converterDolarParaReal(valorEmDolar);

console.log("Valor em dólar:", valorEmDolar);
console.log("Valor convertido em real: R$", valorConvertido.toFixed(2));