const validarLivro = (req, res, next) => {
  const { titulo, autor, ano, paginas } = req.body;
  const erros = [];
  const anoAtual = new Date().getFullYear();

  // ===== TITULO =====
  // presença
  if (titulo === undefined) {
    erros.push("Titulo é obrigatório");
  } 
  // tipo
  else if (typeof titulo !== "string") {
    erros.push("Titulo deve ser uma string");
  } 
  // regra de negócio
  else if (titulo.trim().length < 2) {
    erros.push("Titulo deve ter no mínimo 2 caracteres");
  }

  // ===== AUTOR =====
  if (autor === undefined) {
    erros.push("Autor é obrigatório");
  } 
  else if (typeof autor !== "string") {
    erros.push("Autor deve ser uma string");
  } 
  else if (autor.trim().length < 2) {
    erros.push("Autor deve ter no mínimo 2 caracteres");
  }

  // ===== ANO =====
  if (ano === undefined) {
    erros.push("Ano é obrigatório");
  } 
  else if (typeof ano !== "number" || Number.isNaN(ano)) {
    erros.push("Ano deve ser numérico");
  } 
  else if (ano < 1450 || ano > anoAtual) {
    erros.push(`Ano deve estar entre 1450 e ${anoAtual}`);
  }

  // ===== PAGINAS =====
  if (paginas === undefined) {
    erros.push("Paginas é obrigatório");
  } 
  else if (typeof paginas !== "number" || Number.isNaN(paginas)) {
    erros.push("Paginas deve ser numérico");
  } 
  else if (!Number.isInteger(paginas)) {
    erros.push("Paginas deve ser um número inteiro");
  } 
  else if (paginas < 1) {
    erros.push("Paginas deve ser no mínimo 1");
  }

  if (erros.length > 0) {
    return res.status(400).json({ erros });
  }

  next();
};

export default validarLivro;