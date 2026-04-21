const gerarRelatorio = (alunos) => {
  return alunos.map(({ nome, notas }) => {
    const soma = notas.reduce((acumulador, nota) => acumulador + nota, 0);
    const media = soma / notas.length;

    return `${nome} tem média ${media.toFixed(2)}`;
  });
};

module.exports = gerarRelatorio;