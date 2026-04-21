const logger = (req, res, next) => {
  const inicio = Date.now();

  res.on("finish", () => {
    const tempoResposta = Date.now() - inicio;
    const dataHora = new Date().toISOString();

    console.log(
      `[${dataHora}] ${req.method} ${req.originalUrl} ${res.statusCode} ${tempoResposta}ms`
    );
  });

  next();
};

export default logger;