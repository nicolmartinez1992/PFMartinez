// // Formulario

let nombre = document.getElementById("name");
nombre.onchange = () => {
    localStorage.setItem("nombreSinEnviar", nombre.value)
}

let getNombre = localStorage.getItem("nombreSinEnviar")
nombre.value = getNombre

let email = document.getElementById("email");
email.onchange = () => {
    localStorage.setItem("emailSinEnviar", email.value)
}

let getEmail = localStorage.getItem("emailSinEnviar")
email.value = getEmail
console.log(getEmail)

let mensaje = document.getElementById("message");
mensaje.onchange = () => {
    localStorage.setItem("mensajeSinEnviar", mensaje.value)
}

let getMensaje = localStorage.getItem("mensajeSinEnviar")
mensaje.value = getMensaje
console.log(getMensaje)

let formulario = document.getElementById("form");
formulario.addEventListener("submit", validarFormulario);
let reset = 0;
let usuario = 0;

function validarFormulario(e) {
    e.preventDefault()
    let nombre = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("message").value;
    usuario = { nombre, email, mensaje }

    if ((nombre === "") || (email === "") || (mensaje === "")) {
    let componenteError = document.getElementById("error")
      if (!componenteError) {
        const error = document.createElement("p")
        error.innerHTML = "<p id='error'>Dejo algun campo vacío</p>"
        const enviarComponente = document.getElementById('enviar')
        enviarComponente.append(error)
      }
}
}


//     console.log(usuario)
//     localStorage.setItem("usuario", JSON.stringify(usuario))
//     reset = document.getElementById("form").reset();
// }

    // console.log(componenteError)
    // if (!componenteError) {
    //     const error = document.createElement("p")
    //     error.innerHTML = "<p id='error'>Dejo algun campo vacío</p>"
    //     const enviarComponente = document.getElementById('enviar')
    //     enviarComponente.append(error)
    // }










// let nombreSinEnviar = document.getElementById("name");

// nombreSinEnviar.addEventListener("input", () => {
//     localStorage.setItem("nombreSinEnviar", nombreSinEnviar.value)
// })

// let get = localStorage.getItem("nombreSinEnviar")
// nombreSinEnviar.value = get