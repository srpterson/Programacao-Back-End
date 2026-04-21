const pedidos = require("./pedidos");
const adicionarStatus = require("./status");

const pedidosComStatus = adicionarStatus(pedidos);

console.log("Pedidos originais:");
console.log(pedidos);

console.log("Pedidos com status:");
console.log(pedidosComStatus);