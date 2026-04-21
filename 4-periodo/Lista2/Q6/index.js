const criarServidor = require("./servidor");

console.log("Teste 1:");
console.log(criarServidor());

console.log("Teste 2:");
console.log(criarServidor({ host: "127.0.0.1" }));

console.log("Teste 3:");
console.log(criarServidor({ porta: 8080, seguranca: true }));

console.log("Teste 4:");
console.log(criarServidor({ host: "meuservidor.com", porta: 5000, seguranca: true }));