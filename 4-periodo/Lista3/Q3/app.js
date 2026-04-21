import express from "express";

const app = express();
app.use(express.json());

let proximoId = 1;

const tarefas = [
  {
    id: proximoId++,
    descricao: "Estudar Express",
    status: "pendente",
    dataCriacao: new Date().toISOString()
  },
  {
    id: proximoId++,
    descricao: "Fazer exercícios da lista",
    status: "concluida",
    dataCriacao: new Date().toISOString()
  }
];

// GET /tarefas
app.get("/tarefas", (req, res) => {
  res.json(tarefas);
});

// GET /tarefas/:id
app.get("/tarefas/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const tarefa = tarefas.find((tarefa) => tarefa.id === id);

  if (!tarefa) {
    return res.status(404).json({ erro: "Tarefa não encontrada" });
  }

  res.json(tarefa);
});

// POST /tarefas
app.post("/tarefas", (req, res) => {
  const { descricao, status } = req.body;

  const novaTarefa = {
    id: proximoId++,
    descricao,
    status,
    dataCriacao: new Date().toISOString()
  };

  tarefas.push(novaTarefa);

  res.status(201).json(novaTarefa);
});

// PUT /tarefas/:id
app.put("/tarefas/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { descricao, status, dataCriacao } = req.body;

  const index = tarefas.findIndex((tarefa) => tarefa.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "Tarefa não encontrada" });
  }

  tarefas[index] = {
    id,
    descricao,
    status,
    dataCriacao
  };

  res.json(tarefas[index]);
});

// PATCH /tarefas/:id/concluir
app.patch("/tarefas/:id/concluir", (req, res) => {
  const id = parseInt(req.params.id);

  const tarefa = tarefas.find((tarefa) => tarefa.id === id);

  if (!tarefa) {
    return res.status(404).json({ erro: "Tarefa não encontrada" });
  }

  tarefa.status = "concluida";

  res.json(tarefa);
});

// DELETE /tarefas/:id
app.delete("/tarefas/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = tarefas.findIndex((tarefa) => tarefa.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "Tarefa não encontrada" });
  }

  tarefas.splice(index, 1);

  res.status(204).end();
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});