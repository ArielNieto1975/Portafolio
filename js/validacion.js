export function valida(input) {
    const tipoDeInput = input.dataset.tipo
    if(validadores[tipoDeInput]){
        validadores[tipoDeInput](input)
    }
    
    if (input.validity.valid){
        input.parentElement.classList.remove("input__container--invalid");
        input.parentElement.querySelector(".input__message-error").innerHTML = "";
        
    }else {
        input.parentElement.classList.add("input__container--invalid");
        input.parentElement.querySelector(".input__message-error").innerHTML = mostrarMensajeDeError(tipoDeInput, input);
    }
}

const tipoDeErrores = [
    "valueMissing",
    "typeMismatch",
    "patternMismatch", 
]

const mensajesDeError = {
    nombre: {
        valueMissing: "El campo Nombre no puede estar vacio",
        patternMismatch: "El nombre no es válido"
    },
    asunto: {
        valueMissing: "El campo Asunto no puede estar vacio",
        patternMismatch: "El Asunto no puede tener mas de 50 caracteres."
    },
    mje: {
        valueMissing: "El campo cuerpo del mensaje no puede estar vacio",
        patternMismatch: "El Mensaje no puede tener mas de 300 caracteres."
    },
    email: {
        valueMissing: "El campo Correo no puede estar vacio",
        typeMismatch: "El correo no es valido"
    }
       
}

const validadores = {
    nombre: input => validarNombre(input)
    
}

function mostrarMensajeDeError (tipoDeInput, input){
    let mensaje = "";
    tipoDeErrores.forEach( error => {
        if(input.validity[error]){
            mensaje = mensajesDeError[tipoDeInput][error]
        }
    })
    return mensaje
}

function validarNombre(input) {
    const nome = input.value;
    let mensaje = "";
        if (nome == ""){
            mensaje = "Debes ingresar tu nombre.";
        };
   
}

