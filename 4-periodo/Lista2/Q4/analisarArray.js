const analisarArray = (array) => {
  const [primeiro, ...restante] = array;
  const ultimo = restante[restante.length - 1];
  const meio = restante.slice(0, -1);

  return {
    primeiro,
    ultimo,
    meio
  };
};

module.exports = analisarArray;