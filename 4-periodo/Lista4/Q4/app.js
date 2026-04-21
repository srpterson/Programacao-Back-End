import express from "express";
import logger from "./middlewares/logger.mjs";

const app = express();
app.use(express.json());

// middleware global
app.use(logger);

const produtos = [
  { id: 1, nome: "Notebook" },
  { id: 2, nome: "Mouse" }
];

// rota de sucesso
app.get("/produtos", (req, res) => {
  res.json(produtos);
});

// rota de erro 404
app.get("/produtos/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const produto = produtos.find((produto) => produto.id === id);

  if (!produto) {
    return res.status(404).json({ erro: "Produto nao encontrado" });
  }

  res.json(produto);
});

// rota com erro 400
app.post("/produtos", (req, res) => {
  const { nome } = req.body;

  if (!nome) {
    return res.status(400).json({ erro: "Nome é obrigatório" });
  }

  res.status(201).json({ mensagem: "Produto criado com sucesso" });
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});