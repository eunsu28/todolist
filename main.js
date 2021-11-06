const form = document.querySelector("#input-place");
const input = form.querySelector("input")
const indexLi = document.getElementById("todo-list");

let toDos = [];

function saveToDos(){
    localStorage.setItem("todos", JSON.stringify(toDos));
}

function delate(event){
    const li = event.target.parentElement;
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos()
}

function addTodo(todo){
    const li = document.createElement("li");
    li.id = todo.id;
    const span = document.createElement("span");
    span.innerText = todo.text;
    const button = document.createElement("button")
    button.innerText = "❌"
    button.addEventListener("click", delate);
    li.appendChild(span);
    li.appendChild(button);
    indexLi.appendChild(li);
}

function aSubmit(event){
    event.preventDefault();
    const newTodo = input.value;
    input.value = "";
    const TI = { //todo and id
        text: newTodo,
        id: Date.now()
    }
    toDos.push(TI);
    addTodo(TI);
    saveToDos();
}

form.addEventListener("submit", aSubmit);

const savedToDos = localStorage.getItem("todos");

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    toDos = parsedToDos;
    parsedToDos.forEach(addTodo);
}