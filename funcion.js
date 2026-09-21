let operacion = "";

function seleccionarOperacion(op) {
operacion = op;
}

function mostrarResultado() {

let n1 = Number(document.getElementById("n1").value);
let d1 = Number(document.getElementById("d1").value);

let n2 = Number(document.getElementById("n2").value);
let d2 = Number(document.getElementById("d2").value);

let numerador;
let denominador;

if (d1 === 0 || d2 === 0) {
    alert("El denominador no puede ser 0");
    return;
}
if (operacion === "") {
    alert("Primero selecciona una operación");
    return;
}
if (operacion === "+") {
    numerador = (n1 * d2) + (n2 * d1);
    denominador = d1 * d2;
}
else if (operacion === "-") {
    numerador = (n1 * d2) - (n2 * d1);
    denominador = d1 * d2;
}
else if (operacion === "x") {
    numerador = n1 * n2;
    denominador = d1 * d2;
}
else if (operacion === "/") {
    if (n2 === 0) {
        alert("No se puede dividir entre 0");
        return;
    }
    numerador = n1 * d2;
    denominador = d1 * n2;
}
document.getElementById("resultado").innerHTML =
    numerador + "/" + denominador;
document.getElementById("panelResultado").style.display = "block";
}

/* Inicio de las fracciones */
let respuestaCorrecta = 0;
let letraCorrecta = "";

window.addEventListener("load", function () {
generarEcuacion();
});

function numeroAleatorio(min, max) {
return Math.floor(Math.random() * (max - min + 1)) + min;
}

/* GENERAR ECUACION */
function generarEcuacion() {
let a = numeroAleatorio(2, 10);
let b = numeroAleatorio(-20, 20);
let x = numeroAleatorio(-10, 10);
let c = (a * x) + b;
let signo = b >= 0 ? "+" : "-";
let valorB = Math.abs(b);

document.getElementById("textoEcuacion").textContent =
    a + "x " + signo + " " + valorB + " = " + c;

// Guardamos la respuesta correcta
respuestaCorrecta = x;

/* CREAR RESPUESTAS INCORRECTAS   */
let incorrecta1;
let incorrecta2;
do {
    incorrecta1 = x + numeroAleatorio(1, 5);
} while (incorrecta1 === x);

do {
    incorrecta2 = x - numeroAleatorio(1, 5);
} while (
    incorrecta2 === x ||
    incorrecta2 === incorrecta1
);


/* CREAR ARRAY DE RESPUESTAS      */
let respuestas = [
    respuestaCorrecta,
    incorrecta1,
    incorrecta2
];

/* MEZCLAR LAS RESPUESTAS         */
respuestas.sort(() => Math.random() - 0.5);

/* PONERLAS EN A, B Y C           */
document.getElementById("numeroA").textContent = respuestas[0];
document.getElementById("numeroB").textContent = respuestas[1];
document.getElementById("numeroC").textContent = respuestas[2];

/* ENCONTRAR DONDE QUEDO LA RESPUESTA CORRECTA */
if (respuestas[0] === respuestaCorrecta) {
    letraCorrecta = "A";
}
else if (respuestas[1] === respuestaCorrecta) {
    letraCorrecta = "B";
}
else {
    letraCorrecta = "C";
}

/* LIMPIAR ESTILOS                */
document.getElementById("botonA").classList.remove(
    "correcta",
    "incorrecta"
);
document.getElementById("botonB").classList.remove(
    "correcta",
    "incorrecta"
);
document.getElementById("botonC").classList.remove(
    "correcta",
    "incorrecta"
);
document.getElementById("mensajeRespuesta").textContent = "";
}

/* COMPROBAR RESPUESTA */

function comprobarRespuesta(letra) {

let boton = document.getElementById("boton" + letra);
let mensaje = document.getElementById("mensajeRespuesta");

// Desactivar los botones temporalmente
document.getElementById("botonA").disabled = true;
document.getElementById("botonB").disabled = true;
document.getElementById("botonC").disabled = true;


if (letra === letraCorrecta) {
    boton.classList.add("correcta");
    mensaje.textContent = "¡Correcto! 🎉";
    mensaje.style.color = "limegreen";
}
else {
    boton.classList.add("incorrecta");
    mensaje.textContent = "Incorrecto ❌";
    mensaje.style.color = "red";
    // Mostrar la respuesta correcta
    document
        .getElementById("boton" + letraCorrecta)
        .classList.add("correcta");
}

/* NUEVA ECUACION */
setTimeout(function () {
    document.getElementById("botonA").disabled = false;
    document.getElementById("botonB").disabled = false;
    document.getElementById("botonC").disabled = false;
    generarEcuacion();
}, 1500);
}

/* VIDEO DE MATEMATICAS */

document.addEventListener("DOMContentLoaded", function () {

    const videoM = document.getElementById("videoM");

    if (!videoM) {
        console.error("ERROR: No se encontró el elemento #videoM");
        return;
    }

    window.playPause = function () {

        if (videoM.paused) {
            videoM.play();
        } else {
            videoM.pause();
        }

    };

    window.retroceder = function () {

        videoM.currentTime = Math.max(
            0,
            videoM.currentTime - 10
        );

    };

    window.avanzar = function () {

        videoM.currentTime = Math.min(
            videoM.duration,
            videoM.currentTime + 10
        );

    };

    window.pantallaCompleta = function () {

        if (videoM.requestFullscreen) {
            videoM.requestFullscreen();

        } else if (videoM.webkitRequestFullscreen) {
            videoM.webkitRequestFullscreen();

        } else if (videoM.msRequestFullscreen) {
            videoM.msRequestFullscreen();
        }

    };

    videoM.addEventListener("click", function () {
        playPause();
    });

    document.addEventListener("keydown", function (event) {

        if (
            event.target.tagName === "INPUT" ||
            event.target.tagName === "TEXTAREA"
        ) {
            return;
        }

        if (event.code === "Space") {

            event.preventDefault();

            playPause();
        }

        if (event.code === "ArrowLeft") {

            event.preventDefault();

            retroceder();
        }

        if (event.code === "ArrowRight") {

            event.preventDefault();

            avanzar();
        }

        if (event.key.toLowerCase() === "f") {

            pantallaCompleta();
        }
    });
});



/* areas y fracciomes*/

function cambiarFigura() {

    let figura = document.getElementById("figura").value;
    let visual = document.getElementById("figuraVisual");
    visual.className = "figura " + figura;
}


function calcular() {

    let figura = document.getElementById("figura").value;

    let lado1 = Number(document.getElementById("lado1").value);
    let lado2 = Number(document.getElementById("lado2").value);

    let resultado = lado1 + lado2;

    let perimetro = 0;
    let area = 0;


    if (figura === "cuadrado") {

        perimetro = lado1 * 4;
        area = lado1 * lado1;

    }

    else if (figura === "rectangulo") {
        perimetro = 2 * (lado1 + lado2);
        area = lado1 * lado2;
    }

    else if (figura === "triangulo") {
        perimetro = lado1 * 3;
        area = (lado1 * lado2) / 2;
    }

    else if (figura === "circulo") {
        perimetro = 2 * Math.PI * lado1;
        area = Math.PI * lado1 * lado1;
    }


    document.getElementById("resultado").innerHTML =
        lado1 + " + " + lado2 + " = " + resultado;

    document.getElementById("perimetro").innerHTML =
        perimetro.toFixed(2);

    document.getElementById("area").innerHTML =
        area.toFixed(2);
}
