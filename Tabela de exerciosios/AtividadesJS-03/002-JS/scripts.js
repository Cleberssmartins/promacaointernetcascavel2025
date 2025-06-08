let cavalos = document.querySelector("#cavalos");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcularFerraduras() {
    let ferraduras = Number(cavalos.value) * 4;
    resultado.textContent = "Ferraduras necessárias: " + ferraduras;
}

btCalcular.onclick = function() {
    calcularFerraduras();
}