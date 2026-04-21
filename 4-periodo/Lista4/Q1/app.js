import express from "express";
import validarProduto from "./middlewares/validarProduto.mjs";

const app = express();
app.use(express.json());

const produtos = [];
let proximoId = 1;

app.post("/produtos", validarProduto, (req, res) => {
  const { nome, preco, estoque } = req.body;

  const novoProduto = {
    id: proximoId++,
    nome,
    preco,
    estoque
  };

  produtos.push(novoProduto);

  res.status(201).json(novoProduto);
});

app.get("/produtos", (req, res) => {
  res.json(produtos);
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});