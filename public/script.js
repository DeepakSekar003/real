const list = document.getElementById("todoList");

function loadTodos() {
  fetch("/api/todos")
    .then(res => res.json())
    .then(data => {
      list.innerHTML = "";
      data.forEach(todo => {
        const li = document.createElement("li");
        li.innerHTML = `
          ${todo.text}
          <button onclick="deleteTodo(${todo.id})">❌</button>
        `;
        list.appendChild(li);
      });
    });
}

function addTodo() {
  const input = document.getElementById("todoInput");
  if (!input.value.trim()) return;

  fetch("/api/todos", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: input.value })
  }).then(() => {
    input.value = "";
    loadTodos();
  });
}

function deleteTodo(id) {
  fetch(`/api/todos/${id}`, { method: "DELETE" })
    .then(loadTodos);
}

loadTodos();
