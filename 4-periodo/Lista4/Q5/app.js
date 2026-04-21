import express from "express";
import validarTransferencia from "./middlewares/validarTransferencia.mjs";
import logger from "./middlewares/logger.mjs";
import verificarSaldo from "./middlewares/verificarSaldo.mjs";

const app = express();
app.use(express.json());

const transferencias = [];
let proximoId = 1;

app.post(
  "/transferencias",
  validarTransferencia,
  logger,
  verificarSaldo,
  (req, res) => {
    const { valor, contaOrigem, contaDestino } = req.body;

    const novaTransferencia = {
      id: proximoId++,
      valor,
      contaOrigem,
      contaDestino
    };

    transferencias.push(novaTransferencia);

    res.status(201).json(novaTransferencia);
  }
);

app.get("/transferencias", (req, res) => {
  res.json(transferencias);
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});