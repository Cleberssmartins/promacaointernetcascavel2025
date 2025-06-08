let x1 = document.querySelector("#x1");
let y1 = document.querySelector("#y1");
let x2 = document.querySelector("#x2");
let y2 = document.querySelector("#y2");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcularDistancia() {
    let dx = Number(x2.value) - Number(x1.value);
    let dy = Number(y2.value) - Number(y1.value);
    let distancia = Math.sqrt(dx * dx + dy * dy);
    resultado.textContent = "Distância: " + distancia.toFixed(2);
}

btCalcular.onclick = function() {
    calcularDistancia();
}