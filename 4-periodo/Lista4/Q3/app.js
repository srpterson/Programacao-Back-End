import express from "express";
import validarEvento from "./middlewares/validarEvento.mjs";

const app = express();
app.use(express.json());

let proximoId = 1;

const eventos = [];

app.post("/eventos", validarEvento, (req, res) => {
  const { nome, data, online, endereco } = req.body;

  const novoEvento = {
    id: proximoId++,
    nome,
    data,
    online,
    endereco: online ? null : endereco
  };

  eventos.push(novoEvento);

  res.status(201).json(novoEvento);
});

app.get("/eventos", (req, res) => {
  res.json(eventos);
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});