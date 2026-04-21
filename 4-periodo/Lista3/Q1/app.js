import express from "express";

const app = express();
app.use(express.json());

let proximoId = 1;

const filmes = [
  {
    id: proximoId++,
    titulo: "Interestelar",
    diretor: "Christopher Nolan",
    ano: 2014,
    nota: 9
  },
  {
    id: proximoId++,
    titulo: "Clube da Luta",
    diretor: "David Fincher",
    ano: 1999,
    nota: 8.5
  }
];

// GET /filmes
// Se vier query string ?nota=..., filtra por nota mínima
app.get("/filmes", (req, res) => {
  const { nota } = req.query;

  if (nota) {
    const notaMinima = parseFloat(nota);

    const filtrados = filmes.filter((filme) => filme.nota >= notaMinima);
    return res.json(filtrados);
  }

  res.json(filmes);
});

// GET /filmes/:id
app.get("/filmes/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const filme = filmes.find((filme) => filme.id === id);

  if (!filme) {
    return res.status(404).json({ erro: "Filme não encontrado" });
  }

  res.json(filme);
});

// POST /filmes
app.post("/filmes", (req, res) => {
  const { titulo, diretor, ano, nota } = req.body;

  const novoFilme = {
    id: proximoId++,
    titulo,
    diretor,
    ano,
    nota
  };

  filmes.push(novoFilme);

  res.status(201).json(novoFilme);
});

// PUT /filmes/:id
app.put("/filmes/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { titulo, diretor, ano, nota } = req.body;

  const index = filmes.findIndex((filme) => filme.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "Filme não encontrado" });
  }

  filmes[index] = {
    id,
    titulo,
    diretor,
    ano,
    nota
  };

  res.json(filmes[index]);
});

// DELETE /filmes/:id
app.delete("/filmes/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = filmes.findIndex((filme) => filme.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "Filme não encontrado" });
  }

  filmes.splice(index, 1);

  res.status(204).end();
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});