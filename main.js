const form = document.querySelector("#input-place");
const input = form.querySelector("input")
const indexLi = document.getElementById("todo-list");

function delate(){
    console.log("delate")
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
    addTodo(TI)
}

form.addEventListener("submit", aSubmit);