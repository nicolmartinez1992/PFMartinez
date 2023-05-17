// // Formulario

let nombre = document.getElementById("name");
let email = document.getElementById("email");
let mensaje = document.getElementById("message");

if ((nombre.value === "") || (email.value === "") || (mensaje.value === "")) {
    nombre.addEventListener("input", () => {
        localStorage.setItem("nombreSinEnviar", nombre.value)
    })

    let getNombre = localStorage.getItem("nombreSinEnviar")
    nombre.value = getNombre

    email.addEventListener("input", () => {
        localStorage.setItem("emailSinEnviar", email.value)
    })

    let getEmail = localStorage.getItem("emailSinEnviar")
    email.value = getEmail

    mensaje.addEventListener("input", () => {
        localStorage.setItem("mensajeSinEnviar", mensaje.value)
    })

    let getMensaje = localStorage.getItem("mensajeSinEnviar")
    mensaje.value = getMensaje
} else {
    localStorage.setItem("nombreSinEnviar", nombre.value)
    localStorage.setItem("emailSinEnviar", email.value)
    localStorage.setItem("mensajeSinEnviar", mensaje.value)
}


let formulario = document.getElementById("form");
formulario.addEventListener("submit", validarFormulario);
const error = document.createElement("p")
error.setAttribute("id", "errorMessage")

function validarFormulario(e) {
    e.preventDefault()
    let nombre = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("message").value;

    const enviarComponente = document.getElementById("enviar")
    enviarComponente.append(error)

    if ((nombre === "") || (email === "") || (mensaje === "")) {
        error.innerText = "Dejo algun campo vacío"
    } else {
        const usuario = {
            nombre,
            email,
            mensaje
        }
        localStorage.setItem("usuario", JSON.stringify(usuario))
        reset = document.getElementById("form").reset();
        const error = document.getElementById("errorMessage")
        error.innerText = ""
    }
}