let entrada = document.getElementById("tocheck")

entrada.addEventListener("click", (evento) =>{
    let input = evento.target;
    input.setCustomValidity("Campo vacio    ")
    input.setCustomValidity()
})