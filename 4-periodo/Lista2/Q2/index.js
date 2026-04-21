const usuario = require("./usuario");
const atualizarCidade = require("./atualizar");

const usuarioAtualizado = atualizarCidade(usuario, "Doverlândia");

console.log("Usuário original:");
console.log(usuario);

console.log("Usuário atualizado:");
console.log(usuarioAtualizado);