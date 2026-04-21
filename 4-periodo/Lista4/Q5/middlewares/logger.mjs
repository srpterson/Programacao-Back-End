const logger = (req, res, next) => {
  console.log(`[LOG] ${req.method} ${req.originalUrl}`);
  console.log("Body:", req.body);
  next();
};

export default logger;