const TAXA_CAMBIO = 5.25;

function converterDolarParaReal(valorEmDolar) {
  return valorEmDolar * TAXA_CAMBIO;
}

module.exports = {
  converterDolarParaReal
};