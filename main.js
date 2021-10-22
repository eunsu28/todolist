const form = document.querySelector("#input-place");
const input = form.querySelector("input")

function aSubmit(event){
    event.preventDefault();
    const newTodo = input.value;
    console.log(newTodo)
    input.value = "";
}

form.addEventListener("submit", aSubmit);