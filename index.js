var nombre = document.getElementById("nombre");
var email = document.getElementById("Email");
var contrasena = document.getElementById("contraseña");
var emailvalido = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
var p = document.getElementById("p")
var N1 = document.getElementById("N1")
var N2 = document.getElementById("N2")



function multiplicar() {
    p.innerHTML = N1.value * N2.value

}
function resta() {
    p.innerHTML = N1.value - N2.value
}

function divide() {
    p.innerHTML = N1.value / N2.value
}
function suma() {
    p.innerHTML = parseFloat(N1.value) + parseFloat(N2.value)
}
function validateEmail() {
    console.log(email.value)
    if (emailvalido.test(email.value)) {
        alert("Email valido");
        return true
    }
    else {
        alert("Email invalido");
        return false
    }
}

function validatecontrasena() {
    if (contrasena.value.length < 6) {
        alert("contraseña invalida")
        return false
    }
    else {
        alert("contraseña valida")
        return true
    }
}
function validarnombre() {
    if (nombre.value.length > 2 && !nombre.value.match(/^[0-9]+$/)) {
        alert("nombre valido")
        return true
    }
    else {
        alert("nombre invalido")
        return false
    }
}

function felicidades() {
    if (validateEmail() == true && validarnombre() == true && validatecontrasena() == true) {
        alert("felicidades todo esta bien")
    }
    else {
        alert("oh no")
    }
}
