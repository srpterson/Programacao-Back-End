const gerarRelatorio = (...usuarios) => {
  return usuarios.map(({ nome, idade, compras }) => {
    const totalGasto = compras.reduce((acumulador, valor) => acumulador + valor, 0);

    return `${nome}, com ${idade} anos, gastou um total de R$ ${totalGasto.toFixed(2)}`;
  });
};

module.exports = gerarRelatorio;