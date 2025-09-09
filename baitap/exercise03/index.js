const input = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const list = document.getElementById("todo-list");

let todos = [];

function render() {
  list.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = todo.title;
    if (todo.completed) span.classList.add("completed");
    span.onclick = () => toggleComplete(index);

    const editBtn = document.createElement("button");
    editBtn.textContent = "Sửa";
    editBtn.onclick = () => editTodo(index);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Xóa";
    deleteBtn.onclick = () => deleteTodo(index);

    li.append(span, editBtn, deleteBtn);
    list.appendChild(li);
  });
}

function addTodo() {
  const title = input.value.trim();
  if (title) {
    todos.push({ title, completed: false });
    input.value = "";
    render();
  }
}

function toggleComplete(index) {
  todos[index].completed = !todos[index].completed;
  render();
}

function editTodo(index) {
  const newTitle = prompt("Sửa nội dung:", todos[index].title);
  if (newTitle !== null) {
    todos[index].title = newTitle.trim();
    render();
  }
}

function deleteTodo(index) {
  todos.splice(index, 1);
  render();
}

addBtn.onclick = addTodo;
