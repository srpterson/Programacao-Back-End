const calcular = (operacao, ...numeros) => {
  if (numeros.length === 0) {
    return "Nenhum número foi informado";
  }

  if (operacao === "soma") {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
  }

  if (operacao === "media") {
    const soma = numeros.reduce((acumulador, numero) => acumulador + numero, 0);
    return soma / numeros.length;
  }

  if (operacao === "multiplicar") {
    return numeros.reduce((acumulador, numero) => acumulador * numero, 1);
  }

  return "Operação inválida";
};

module.exports = calcular;