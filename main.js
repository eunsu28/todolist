const input = document.querySelector("#input-place");

function aSubmit(event){
    event.preventDefault();
    console.log("submit")
}

input.addEventListener("submit", aSubmit);