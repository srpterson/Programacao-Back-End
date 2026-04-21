import express from "express";
import autenticar from "./middlewares/autenticar.mjs";

const app = express();
app.use(express.json());

let proximoId = 1;

const usuarios = [
  { id: proximoId++, nome: "Ana", email: "ana@email.com" },
  { id: proximoId++, nome: "Bruno", email: "bruno@email.com" }
];

// GET /usuarios
// Não exige autenticação
app.get("/usuarios", (req, res) => {
  res.json(usuarios);
});

// GET /usuarios/:id
// Não exige autenticação
app.get("/usuarios/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const usuario = usuarios.find((usuario) => usuario.id === id);

  if (!usuario) {
    return res.status(404).json({ erro: "Usuario nao encontrado" });
  }

  res.json(usuario);
});

// POST /usuarios
// Exige autenticação
app.post("/usuarios", autenticar, (req, res) => {
  const { nome, email } = req.body;

  const novoUsuario = {
    id: proximoId++,
    nome,
    email
  };

  usuarios.push(novoUsuario);

  res.status(201).json(novoUsuario);
});

// PUT /usuarios/:id
// Exige autenticação
app.put("/usuarios/:id", autenticar, (req, res) => {
  const id = parseInt(req.params.id);
  const { nome, email } = req.body;

  const index = usuarios.findIndex((usuario) => usuario.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "Usuario nao encontrado" });
  }

  usuarios[index] = {
    id,
    nome,
    email
  };

  res.json(usuarios[index]);
});

// DELETE /usuarios/:id
// Exige autenticação
app.delete("/usuarios/:id", autenticar, (req, res) => {
  const id = parseInt(req.params.id);

  const index = usuarios.findIndex((usuario) => usuario.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "Usuario nao encontrado" });
  }

  usuarios.splice(index, 1);

  res.status(204).end();
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});