const avaliarIMC = (...pessoas) => {
  return pessoas.map(({ nome, peso, altura }) => {
    const imc = peso / (altura * altura);

    let classificacao = "";

    if (imc < 18.5) {
      classificacao = "abaixo do peso";
    } else if (imc < 25) {
      classificacao = "peso normal";
    } else if (imc < 30) {
      classificacao = "sobrepeso";
    } else {
      classificacao = "obesidade";
    }

    return `${nome} possui IMC ${imc.toFixed(2)} e está com ${classificacao}`;
  });
};

module.exports = avaliarIMC;