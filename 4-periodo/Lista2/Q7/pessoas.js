const processarPessoas = (...pessoas) => {
  return pessoas.map(({ nome, idade, altura }) => {
    const status = idade >= 18 ? "maior de idade" : "menor de idade";
    return `${nome} tem ${idade} anos, altura ${altura}m e é ${status}`;
  });
};

module.exports = processarPessoas;