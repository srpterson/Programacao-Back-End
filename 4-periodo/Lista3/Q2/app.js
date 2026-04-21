import express from "express";

const app = express();
app.use(express.json());

let proximoId = 1;

const livros = [
  {
    id: proximoId++,
    titulo: "Eleanor & Park",
    autor: "Rainbow Rowell",
    genero: "Romance",
    lido: true
  },
  {
    id: proximoId++,
    titulo: "1984",
    autor: "George Orwell",
    genero: "Ficção distópica",
    lido: false
  },
  {
    id: proximoId++,
    titulo: "Dom Casmurro",
    autor: "Machado de Assis",
    genero: "Romance",
    lido: false
  }
];

// GET /livros
app.get("/livros", (req, res) => {
  res.json(livros);
});

// IMPORTANTE: esta rota precisa vir ANTES de /livros/:id
// GET /livros/nao-lidos
app.get("/livros/nao-lidos", (req, res) => {
  const naoLidos = livros.filter((livro) => livro.lido === false);
  res.json(naoLidos);
});

// GET /livros/:id
app.get("/livros/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const livro = livros.find((livro) => livro.id === id);

  if (!livro) {
    return res.status(404).json({ erro: "Livro não encontrado" });
  }

  res.json(livro);
});

// POST /livros
app.post("/livros", (req, res) => {
  const { titulo, autor, genero, lido } = req.body;

  const novoLivro = {
    id: proximoId++,
    titulo,
    autor,
    genero,
    lido
  };

  livros.push(novoLivro);

  res.status(201).json(novoLivro);
});

// PUT /livros/:id
app.put("/livros/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { titulo, autor, genero, lido } = req.body;

  const index = livros.findIndex((livro) => livro.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "Livro não encontrado" });
  }

  livros[index] = {
    id,
    titulo,
    autor,
    genero,
    lido
  };

  res.json(livros[index]);
});

// DELETE /livros/:id
app.delete("/livros/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = livros.findIndex((livro) => livro.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "Livro não encontrado" });
  }

  livros.splice(index, 1);

  res.status(204).end();
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});