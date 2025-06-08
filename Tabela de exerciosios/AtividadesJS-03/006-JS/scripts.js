let peso = document.querySelector("#peso");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcularValor() {
    let valor = Number(peso.value) * 12.00;
    resultado.textContent = "Valor a pagar: R$" + valor.toFixed(2);
}

btCalcular.onclick = function() {
    calcularValor();
}