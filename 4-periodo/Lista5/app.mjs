import express from "express";
import sequelize from "./config/database.mjs";
import Livro from "./models/Livro.mjs";
import validarLivro from "./middlewares/validarLivro.mjs";
import logger from "./middlewares/logger.mjs";

const app = express();

app.use(express.json());
app.use(logger);

// GET /livros
app.get("/livros", async (req, res) => {
  const livros = await Livro.findAll();
  res.json(livros);
});

// GET /livros/:id
app.get("/livros/:id", async (req, res) => {
  const livro = await Livro.findByPk(req.params.id);

  if (!livro) {
    return res.status(404).json({ erro: "Livro nao encontrado" });
  }

  res.json(livro);
});

// POST /livros
app.post("/livros", validarLivro, async (req, res) => {
  const novoLivro = await Livro.create(req.body);
  res.status(201).json(novoLivro);
});

// PUT /livros/:id
app.put("/livros/:id", validarLivro, async (req, res) => {
  const livro = await Livro.findByPk(req.params.id);

  if (!livro) {
    return res.status(404).json({ erro: "Livro nao encontrado" });
  }

  await livro.update(req.body);
  res.json(livro);
});

// DELETE /livros/:id
app.delete("/livros/:id", async (req, res) => {
  const livro = await Livro.findByPk(req.params.id);

  if (!livro) {
    return res.status(404).json({ erro: "Livro nao encontrado" });
  }

  await livro.destroy();
  res.status(204).end();
});

const iniciarServidor = async () => {
  try {
    await sequelize.authenticate();
    console.log("Conexão com o banco realizada com sucesso.");

    await sequelize.sync();
    console.log("Banco sincronizado com sucesso.");

    app.listen(3000, () => {
      console.log("Servidor rodando em http://localhost:3000");
    });
  } catch (erro) {
    console.error("Erro ao conectar ou sincronizar o banco:", erro.message);
    process.exit(1);
  }
};

iniciarServidor();