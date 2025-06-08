let paes = document.querySelector("#paes");
let broas = document.querySelector("#broas");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcularVenda() {
    let total = (Number(paes.value) * 0.12) + (Number(broas.value) * 1.50);
    let poupanca = total * 0.1;
    resultado.textContent = "Total: R$" + total.toFixed(2) + " | Poupança: R$" + poupanca.toFixed(2);
}

btCalcular.onclick = function() {
    calcularVenda();
}
