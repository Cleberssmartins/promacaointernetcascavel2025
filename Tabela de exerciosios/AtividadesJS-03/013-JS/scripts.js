let raio = document.querySelector("#raio");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcularAreaPizza() {
    let area = 3.14 * Math.pow(Number(raio.value), 2);
    resultado.textContent = "Área da pizza: " + area.toFixed(2) + " cm²";
}

btCalcular.onclick = function() {
    calcularAreaPizza();
}