export function validar(input){
    const tipoDeInput = input.dataset.tipo; // dataset devuelve un arreglo(mapa) con todos los data attribute que tiene el obj y su correspondiente valor, con .nombreAtributo accedemos al valor. 
    // verficio que tipo = "nacimiento" este dentro del array validadores
    
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input); // dentro del mapa el valor que corresponde a [tipoDeInput] es una arrow function 
    }

    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid") // remueve la clase .input-container--invalid si valid = True
    } else {
        input.parentElement.classList.add("input-container--invalid")
    }
}

//creo un map con cada uno de validadores
const validadores = {
    nacimiento : (input) =>validarEdad(input),
}

function validarEdad(input){
    const fechaUsuario = new Date(input.value);// fecha ingresada por el usuario
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fechaUsuario.getUTCFullYear()+ 18, fechaUsuario.getUTCMonth(), 
        fechaUsuario.getUTCDate()); // le sumo 18 al año ingresado por el usuario para despues comparar ";
    let mensaje ="";
    if(!(fechaActual >= diferenciaFechas)){
        mensaje = "Tienes que ser mayor de edad"
        
    }
    input.setCustomValidity(mensaje);  
}