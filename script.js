let todoListEle = document.querySelector(".todos-container");
let inputEle = document.querySelector("input");


function loadTodos() {
  const saved = JSON.parse(localStorage.getItem("todos")) || [];

  saved.forEach((text, index) => {
    createTodoElement(text, index);
  });
}

function saveTodos() {
  const allTodos = [...document.querySelectorAll(".todo-block p")].map(
    (p) => p.textContent
  );

  localStorage.setItem("todos", JSON.stringify(allTodos));
}


function createTodoElement(text, id) {
  let newTodo = document.createElement("div");
  newTodo.classList.add("todo-block");
  newTodo.id = id;

  let todoTitlePara = document.createElement("p");
  todoTitlePara.textContent = text;

  let binDiv = document.createElement("div");
  let fontAwesomeIconTag = document.createElement("i");
  fontAwesomeIconTag.classList.add("fa-solid", "fa-trash", "fa-black", "fa-2x");

  binDiv.appendChild(fontAwesomeIconTag);
  newTodo.appendChild(todoTitlePara);
  newTodo.appendChild(binDiv);

  todoListEle.appendChild(newTodo);
}


todoListEle.addEventListener("click", (e) => {
  const todo = e.target.closest(".todo-block");
  if (!todo) return;

  todo.remove();
  saveTodos(); 
  alert(`Todo removed`);
});


inputEle.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const inputValue = inputEle.value.trim();
    if (!inputValue) return;

    createTodoElement(inputValue, todoListEle.children.length);
    saveTodos(); 

    alert(`Todo added: ${inputValue}`);
    inputEle.value = "";
  }
});


loadTodos();
