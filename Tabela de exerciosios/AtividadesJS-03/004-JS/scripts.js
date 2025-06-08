let nome = document.querySelector("#nome");
let idade = document.querySelector("#idade");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcularDias() {
    let dias = Number(idade.value) * 365;
    resultado.textContent = nome.value + ", você já viveu " + dias + " dias.";
}

btCalcular.onclick = function() {
    calcularDias();
}
