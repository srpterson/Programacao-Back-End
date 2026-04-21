const logger = (req, res, next) => {
  res.on("finish", () => {
    if (res.statusCode >= 400) {
      console.log(`[ERRO] ${req.method} ${req.originalUrl} - Status: ${res.statusCode}`);
    }
  });

  next();
};

export default logger;