const criarServidor = ({ host = "localhost", porta = 3000, seguranca = false } = {}) => {
  return `Servidor configurado em ${host}:${porta} | Segurança: ${seguranca}`;
};

module.exports = criarServidor;