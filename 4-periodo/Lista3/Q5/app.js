import express from "express";

const app = express();
app.use(express.json());

let proximoId = 1;

const medicamentos = [
  {
    id: proximoId++,
    nome: "Paracetamol",
    dosagem: "500mg",
    frequenciaUso: "A cada 8 horas",
    horariosAdministracao: ["08:00", "16:00", "00:00"]
  },
  {
    id: proximoId++,
    nome: "Amoxicilina",
    dosagem: "250mg",
    frequenciaUso: "A cada 12 horas",
    horariosAdministracao: ["09:00", "21:00"]
  }
];

// GET /medicamentos
app.get("/medicamentos", (req, res) => {
  res.json(medicamentos);
});

// GET /medicamentos/:id
app.get("/medicamentos/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const medicamento = medicamentos.find((medicamento) => medicamento.id === id);

  if (!medicamento) {
    return res.status(404).json({ erro: "Medicamento não encontrado" });
  }

  res.json(medicamento);
});

// POST /medicamentos
app.post("/medicamentos", (req, res) => {
  const { nome, dosagem, frequenciaUso, horariosAdministracao } = req.body;

  const novoMedicamento = {
    id: proximoId++,
    nome,
    dosagem,
    frequenciaUso,
    horariosAdministracao
  };

  medicamentos.push(novoMedicamento);

  res.status(201).json(novoMedicamento);
});

// PUT /medicamentos/:id
app.put("/medicamentos/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const { nome, dosagem, frequenciaUso, horariosAdministracao } = req.body;

  const index = medicamentos.findIndex((medicamento) => medicamento.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "Medicamento não encontrado" });
  }

  medicamentos[index] = {
    id,
    nome,
    dosagem,
    frequenciaUso,
    horariosAdministracao
  };

  res.json(medicamentos[index]);
});

// DELETE /medicamentos/:id
app.delete("/medicamentos/:id", (req, res) => {
  const id = parseInt(req.params.id);

  const index = medicamentos.findIndex((medicamento) => medicamento.id === id);

  if (index === -1) {
    return res.status(404).json({ erro: "Medicamento não encontrado" });
  }

  medicamentos.splice(index, 1);

  res.status(204).end();
});

app.listen(3000, () => {
  console.log("Servidor rodando em http://localhost:3000");
});