let todoListEle = document.querySelectorAll(".todos-container");
let inputEle = document.querySelector("input");

// fetching todolist
let todos = todoListEle[0].children;
console.log(todos.length);

// Removing Todos Logic
todoListEle[0].addEventListener("click", (e) => {
  const todo = e.target.closest(".todo-block");
  if (!todo) return; // clicked outside any todo

  if (todo.id != 0) {
    todo.remove();
    alert(`Todo removed`);
    console.log(`Todo with id: ${todo.id} removed`);
  }
});


// adding todos
inputEle.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const inputValue = inputEle.value;
    
    // Create Todo
    let newTodo = document.createElement("div");
    newTodo.classList.add("todo-block");
    newTodo.id = todos.length;

    // Create Todo Title
    let todoTitlePara = document.createElement("p");
    todoTitlePara.textContent = inputValue;

    // Create Todo Bin
    let binDiv = document.createElement("div");
    let fontAwesomeIconTag = document.createElement("i");
    fontAwesomeIconTag.classList.add(
      "fa-solid",
      "fa-trash",
      "fa-black",
      "fa-2x"
    );
    binDiv.appendChild(fontAwesomeIconTag);

    newTodo.appendChild(todoTitlePara);
    newTodo.appendChild(binDiv);

    todoListEle[0].appendChild(newTodo);
    alert(`Todo added with Title: ${inputValue}`);
    inputEle.value = "";
  }
});
