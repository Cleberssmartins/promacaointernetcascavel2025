let largura = document.querySelector("#largura");
let comprimento = document.querySelector("#comprimento");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcularArea() {
    let area = Number(largura.value) * Number(comprimento.value);
    resultado.textContent = "Área do terreno: " + area + " m²";
}

btCalcular.onclick = function() {
    calcularArea();
}
