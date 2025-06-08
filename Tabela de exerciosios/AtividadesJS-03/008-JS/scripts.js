let pequenas = document.querySelector("#pequenas");
let medias = document.querySelector("#medias");
let grandes = document.querySelector("#grandes");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcularVenda() {
    let total = (Number(pequenas.value) * 10) + (Number(medias.value) * 12) + (Number(grandes.value) * 15);
    resultado.textContent = "Valor total arrecadado: R$" + total.toFixed(2);
}

btCalcular.onclick = function() {
    calcularVenda();
}