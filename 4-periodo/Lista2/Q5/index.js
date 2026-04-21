const produtos = require("./produtos");
const { calcularTotal, aplicarDesconto, gerarMensagens } = require("./servicos");

const total = calcularTotal(produtos);
const produtosComDesconto = aplicarDesconto(produtos, 10);
const mensagens = gerarMensagens(produtosComDesconto);

console.log("Produtos originais:");
console.log(produtos);

console.log("Valor total da compra:");
console.log(total);

console.log("Produtos com desconto:");
console.log(produtosComDesconto);

console.log("Mensagens:");
console.log(mensagens);