const validarTransferencia = (req, res, next) => {
  const { valor, contaOrigem, contaDestino } = req.body;
  const erros = [];

  if (valor === undefined) {
    erros.push("Valor é obrigatório");
  } else if (typeof valor !== "number" || Number.isNaN(valor)) {
    erros.push("Valor deve ser numérico");
  } else if (valor <= 0) {
    erros.push("Valor deve ser maior que zero");
  }

  if (contaOrigem === undefined) {
    erros.push("Conta de origem é obrigatória");
  } else if (typeof contaOrigem !== "string" || contaOrigem.trim() === "") {
    erros.push("Conta de origem deve ser uma string válida");
  }

  if (contaDestino === undefined) {
    erros.push("Conta de destino é obrigatória");
  } else if (typeof contaDestino !== "string" || contaDestino.trim() === "") {
    erros.push("Conta de destino deve ser uma string válida");
  }

  if (
    typeof contaOrigem === "string" &&
    typeof contaDestino === "string" &&
    contaOrigem.trim() !== "" &&
    contaDestino.trim() !== "" &&
    contaOrigem === contaDestino
  ) {
    erros.push("Conta de origem e destino não podem ser iguais");
  }

  if (erros.length > 0) {
    return res.status(400).json({ erros });
  }

  next();
};

export default validarTransferencia;