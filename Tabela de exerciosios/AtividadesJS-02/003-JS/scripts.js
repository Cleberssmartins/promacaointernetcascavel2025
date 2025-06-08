let valor1 = document.querySelector("#valor1");
let valor2 = document.querySelector("#valor2");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcular() {
    let n1 = Number(valor1.value);
    let n2 = Number(valor2.value);

    let soma = n1 + n2;
    let sub = n1 - n2;
    let mult = n1 * n2;
    let div = n1 / n2;

    resultado.innerHTML = 
        "Soma: " + soma + "<br>" +
        "Subtração: " + sub + "<br>" +
        "Multiplicação: " + mult + "<br>" +
        "Divisão: " + div;
}

btCalcular.onclick = function(){
    calcular();
}