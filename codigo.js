const form = document.getElementById("form");
const usuario = document.getElementById("username");
const email = document.getElementById("email");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    checkInputs();
});

function checkInputs() {
    const usuarioValue = usuario.value.trim();
    const emailValue = email.value.trim();
    const mensajeValue = mensaje.value.trim();

    if (usuarioValue === "") {
        setErrorFor(usuario, "No puede dejar el usuairo en blanco");
    } else {
        setSuccessFor(usuario);
    }

    if (mensajeValue === "") {
        setErrorFor(mensaje, "No puede dejar el usuairo en blanco");
    } else {
        setSuccessFor(mensaje);
    }

    if (emailValue === "") {
        setErrorFor(email, "No puede dejar el email en blanco");
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, "No ingreso un email válido");
    } else {
        setSuccessFor(email);
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
        email
    );
}