import { validar } from "./validaciones2.js";
const inputs = document.querySelectorAll("input") // me regresa todos los objetos tipo input en un arreglo

inputs.forEach(input => { // itera sobre el array inputs y aplica a cada ele el .addEventListener el cual manda a llamar a la funcion validar
    input.addEventListener("blur", (input)=>{
        validar(input.target); 
    })
    
});