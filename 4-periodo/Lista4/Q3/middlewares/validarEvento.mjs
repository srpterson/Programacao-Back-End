const validarEvento = (req, res, next) => {
  const { nome, data, online, endereco } = req.body;
  const erros = [];

  // nome
  if (!nome) {
    erros.push("Nome é obrigatório");
  }

  // data
  if (!data) {
    erros.push("Data é obrigatória");
  }

  // online
  if (typeof online !== "boolean") {
    erros.push("Online deve ser booleano");
  }

  // REGRA CONDICIONAL 🔥
  if (online === false && !endereco) {
    erros.push("Endereço é obrigatório para eventos presenciais");
  }

  if (erros.length > 0) {
    return res.status(400).json({ erros });
  }

  next();
};

export default validarEvento;