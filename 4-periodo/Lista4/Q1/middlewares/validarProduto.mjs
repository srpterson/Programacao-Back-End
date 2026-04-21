const validarProduto = (req, res, next) => {
  const { nome, preco, estoque } = req.body;
  const erros = [];

  if (nome === undefined) {
    erros.push("Nome é obrigatório");
  } else if (typeof nome !== "string") {
    erros.push("Nome deve ser uma string");
  } else if (nome.trim().length < 3) {
    erros.push("Nome deve ter no mínimo 3 caracteres");
  }

  if (preco === undefined) {
    erros.push("Preço é obrigatório");
  } else if (typeof preco !== "number" || Number.isNaN(preco)) {
    erros.push("Preço deve ser numérico");
  } else if (preco <= 0) {
    erros.push("Preço deve ser maior que zero");
  }

  if (estoque === undefined) {
    erros.push("Estoque é obrigatório");
  } else if (!Number.isInteger(estoque)) {
    erros.push("Estoque deve ser um número inteiro");
  } else if (estoque < 0) {
    erros.push("Estoque deve ser maior ou igual a zero");
  }

  if (erros.length > 0) {
    return res.status(400).json({ erros });
  }

  next();
};

export default validarProduto;