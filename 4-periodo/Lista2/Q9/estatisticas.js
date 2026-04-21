const estatisticas = (...numeros) => {
  const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
  const maior = Math.max(...numeros);
  const menor = Math.min(...numeros);
  const media = soma / numeros.length;

  return {
    maior,
    menor,
    soma,
    media
  };
};

module.exports = estatisticas;