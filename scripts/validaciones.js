/* validacion de mayoria de edad*/

const inputNacimiento = document.querySelector("#birth"); // creo un objet de etiqueta <input> 
//console.log(inputNacimiento)


/* blur indica para cuando el elemento pierda el foco*/ 
inputNacimiento.addEventListener('blur', (evento) =>{
    validarEdad(evento.target);
    
});

function validarEdad(input){
    const fechaUsuario = new Date(input.value);// fecha ingresada por el usuario
    const fechaActual = new Date();
    const diferenciaFechas = new Date(fechaUsuario.getUTCFullYear()+ 18, fechaUsuario.getUTCMonth(), fechaUsuario.getUTCDate()); // le sumo 18 al año ingresado por el usuario para despues comparar 
    let mensaje = "Tudo bien";
    if(!(fechaActual >= diferenciaFechas)){
        mensaje = "Tienes que ser mayor de edad"
        
    }

    input.setCustomValidity(mensaje);

    
}
