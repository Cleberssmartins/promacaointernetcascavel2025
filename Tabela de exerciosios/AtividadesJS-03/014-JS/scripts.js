let total = document.querySelector("#total");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function dividirConta() {
    let valor = Number(total.value);
    let parteCarlos = Math.floor(valor / 3);
    let parteAndre = Math.floor(valor / 3);
    let parteFelipe = valor - (parteCarlos + parteAndre);
    resultado.textContent = "Carlos: R$" + parteCarlos.toFixed(2) + 
                            " | André: R$" + parteAndre.toFixed(2) + 
                            " | Felipe: R$" + parteFelipe.toFixed(2);
}

btCalcular.onclick = function() {
    dividirConta();
}
