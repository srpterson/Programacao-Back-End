const adicionarStatus = (pedidos) => {
  return pedidos.map((pedido) => {
    return {
      ...pedido,
      status: pedido.total >= 200 ? "APROVADO" : "PENDENTE"
    };
  });
};

module.exports = adicionarStatus;