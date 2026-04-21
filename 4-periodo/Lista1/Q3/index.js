const pessoas = require("./pessoas");

const maioresDeIdade = pessoas.filter((pessoa) => {
  return pessoa.idade > 18;
});

console.log("Pessoas maiores de 18 anos:");
console.log(maioresDeIdade);