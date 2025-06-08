let precoLitro = document.querySelector("#precoLitro");
let valorPago = document.querySelector("#valorPago");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcularLitros() {
    let litros = Number(valorPago.value) / Number(precoLitro.value);
    resultado.textContent = "Litros abastecidos: " + litros.toFixed(2) + " L";
}

btCalcular.onclick = function() {
    calcularLitros();
}