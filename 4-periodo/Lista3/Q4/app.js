import express from "express";

const app = express();
app.use(express.json());

let proximoId = 1;

const musicas = [
  {
    id: proximoId++,
    titulo: "Yellow",
    artista: "Coldplay",
    album: "Parachutes",
    duracao: 269
  },
  {
    id: proximoId++,
    titulo: "Viva La Vida",
    artista: "Coldplay",
    album: "Viva la Vida or Death and All His Friends",
    duracao: 242
  },
  {
    id: proximoId++,
    titulo: "Blinding Lights",
    artista: "The Weeknd",
    album: "After Hours",
    duracao: 200
  }
];

// GET /musicas
// Se vier ?artista=..., filtra pelo artista
app.get("/musicas", (req, res) => {
  const { artista } = req.query;

  if (artista) {
    const filtradas = musicas.filter((musica) =>
      musica.artista.toLowerCase().includes(artista.toLowerCase())
    );

    return res.json(filtradas);
  }

  res.json(musicas);
});

// GET /musicas/:id
app.get("/musicas/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const musica = musicas.find((musica) => musica.id === id);

  if (!musica) {
    return res.status(404).json({ erro: "Música não encontrada" });
  }

  res.json(musica);
});

// POST /musicas
app.post("/musicas", (req, res) => {
  const { titulo, artista, album, duracao } = req.body;

  const novaMusica = {
    id: proximoId++,
    titulo,
    artista,
    album,
    duracao
  };

  musicas.push(novaMusica);

  res.status(201).json(novaMusica);
});

// PUT /musicas/:id
app.put("/musicas/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { titulo, artista, album, duracao } = req.body;

  const index = musicas.findIndex((musica) => musica.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "Música não encontrada" });
  }

  musicas[index] = {
    id,
    titulo,
    artista,
    album,
    duracao
  };

  res.json(musicas[index]);
});

// DELETE /musicas/:id
app.delete("/musicas/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = musicas.findIndex((musica) => musica.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "Música não encontrada" });
  }

  musicas.splice(index, 1);

  res.status(204).end();
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});