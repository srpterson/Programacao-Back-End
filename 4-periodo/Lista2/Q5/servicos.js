const calcularTotal = (produtos) => {
  return produtos.reduce((acumulador, produto) => acumulador + produto.preco, 0);
};

const aplicarDesconto = (produtos, percentual) => {
  return produtos.map((produto) => {
    return {
      ...produto,
      preco: produto.preco - (produto.preco * percentual / 100)
    };
  });
};

const gerarMensagens = (produtos) => {
  return produtos.map(({ nome, preco }) => {
    return `${nome} custa R$ ${preco.toFixed(2)}`;
  });
};

module.exports = {
  calcularTotal,
  aplicarDesconto,
  gerarMensagens
};