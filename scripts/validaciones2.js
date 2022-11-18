export function validar(input){
    const tipoDeInput = input.dataset.tipo; // dataset devuelve un arreglo(mapa) con todos los data attribute que tiene el obj y su correspondiente valor, con .nombreAtributo accedemos al valor.

    // verficio que tipo = "nacimiento" este dentro del array validadores
    
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input); // dentro del mapa el valor que corresponde a [tipoDeInput] es una arrow function 
    }

    if(input.validity.valid){
        input.parentElement.classList.remove("input-container--invalid"); // remueve la clase .input-container--invalid (tiene el style en css para mostrar el rojo la div que contiene el inpunt nombre) si valid = True
        input.parentElement.querySelector(".input-message-error").innerHTML =""; // coloca vacio el mensaje contenido en la etiqueta <span> 
        //console.log(input.parentElement)
    } else {
        input.parentElement.classList.add("input-container--invalid")
        input.parentElement.querySelector(".input-message-error").innerHTML = mostrarMensajeError(tipoDeInput, input) // agrega a <span> el mensaje devuelto por MostrarMensajeError
        console.log(input.parentElement)
    }
}

// defino el tipo de errores a buscar en validity
const tipodeErrores =[
    "valueMissing", // !!!!FUNCION UNICAMENTE SI "REQUIRED" HA SIDO DEFINIDO EN LA ETIQUETA ¡¡¡¡
    "typeMismatch",
    "patternMismatch",
    "customError"
]

const mensajedeError = {
    nombre : {valueMissing : "Ingrese un nombre"},
    email : {valueMissing : "Ingrese emai",
            typeMismatch: "Correo no válido "},
    password : {valueMissing : "Ingrese contraseña",
                patternMismatch: "Al menos 6 caracteres, máximo 12, debe contener una letra minúscula, una letra mayúscula, un número y no puede contener caracteres especiales"},
    nacimiento : { //customError :"Tienes que ser mayor de edad 18",
                    valueMissing : "Este campo no puede estar vacio"},
    numero : { valueMissing: "Este campo no puede estar vacio", patternMismatch : "Formato inválido. Se requieren 10 numeros"},
    direccion: { valueMissing: "Este campo no puede estar vacio", patternMismatch : "Formato inválido. Se requieren 10 numeros"},
    ciudad : { valueMissing: "Este campo no puede estar vacio", patternMismatch : "Formato inválido. Se requieren entre 10-40 caracteres"},
    estado : { valueMissing: "Este campo no puede estar vacio", patternMismatch : "Formato inválido. Se requieren entre 10-40 caracteres"}
}

//creo un map con cada uno de validadores
const validadores = {
    nacimiento : (input) =>validarEdad(input),
}

function mostrarMensajeError(tipoDeInput, input){ // funcion llamada por validar
    let mensaje ="";
    tipodeErrores.forEach(error => {
        if(input.validity[error]) { // busco en Validity cada uno de los errores contenidos en tipoDeErrores 
            console.log(mensajedeError[tipoDeInput][error]);// segun el data-attribute y el error me muestra el mensaje. Tengo que asegurarme que el data-attribute este en la etiqueta
            mensaje = mensajedeError[tipoDeInput][error];
        }
    });

    return mensaje;
}


function validarEdad(input){ 
    const fechaUsuario = new Date(input.value);// fecha ingresada por el usuario
    const fechaActual = new Date();
    const diferenciaFechas = new Date(
        fechaUsuario.getUTCFullYear()+ 18, fechaUsuario.getUTCMonth(), 
        fechaUsuario.getUTCDate()); // le sumo 18 al año ingresado por el usuario para despues comparar ";
    
    console.log(input.parentElement)
    let mensaje ="";
    if(!isNaN(fechaUsuario)){
        console.log("Its Nan")
        if(!(fechaActual >= diferenciaFechas)){
            //mensaje = "Tienes que ser mayor de edad";
            console.log(" Mayor de edad");
            input.parentElement.classList.add("input-container--invalid")
            console.log(input.parentElement)
            input.parentElement.querySelector(".input-message-error").innerHTML = "Tienes que ser mayor de edad"
            //console.log(input.parentElement.querySelector(".input-message-error"))
        }
    }
    
    
    //input.setCustomValidity(mensaje);  
}