const form = document.querySelector("#input-place");
const input = form.querySelector("input")

function addTodo(todo){
    console.log(todo)
}

function aSubmit(event){
    event.preventDefault();
    const newTodo = input.value;
    addTodo(newTodo)
    input.value = "";
}

form.addEventListener("submit", aSubmit);