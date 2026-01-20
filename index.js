const express = require("express");
const app = express();

app.use(express.json());
app.use((req, res, next) => {
  res.setHeader("Cache-Control", "no-store, no-cache, must-revalidate, private");
  next();
});
app.use(express.static("public"));

let todos = []; // real storage (in-memory)

app.get("/api/todos", (req, res) => {
  res.json(todos);
});

app.post("/api/todos", (req, res) => {
  const todo = {
    id: Date.now(),
    text: req.body.text
  };
  todos.push(todo);
  res.status(201).json(todo);
});

app.delete("/api/todos/:id", (req, res) => {
  const id = Number(req.params.id);
  todos = todos.filter(todo => todo.id !== id);
  res.sendStatus(204);
});

app.get("/health", (req, res) => {
  res.json({ status: "OK" });
});

app.listen(3000, '0.0.0.0', () => {
  console.log("Server running on port 3000");
});

