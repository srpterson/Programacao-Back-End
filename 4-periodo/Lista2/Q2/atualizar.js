const atualizarCidade = (usuario, novaCidade) => {
  return {
    ...usuario,
    endereco: {
      ...usuario.endereco,
      cidade: novaCidade
    }
  };
};

module.exports = atualizarCidade;