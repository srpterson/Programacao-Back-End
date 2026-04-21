const os = require("os");

const nomeSistema = os.type();
const memoriaLivreGB = (os.freemem() / 1024 / 1024 / 1024).toFixed(2);
const tempoAtividade = os.uptime();

console.log("Sistema operacional:", nomeSistema);
console.log("Memória RAM livre:", memoriaLivreGB + " GB");
console.log("Tempo de atividade:", tempoAtividade + " segundos");