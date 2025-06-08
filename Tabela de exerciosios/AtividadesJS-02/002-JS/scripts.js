let pessoas = document.querySelector("#pessoas");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcular() {
    let qtd = Number(pessoas.value);
    let ovos = qtd * 2;
    let queijo = qtd * 50;

    resultado.innerHTML = 
        "Ovos: " + ovos + "<br>" +
        "Queijo: " + queijo + "g";
}

btCalcular.onclick = function(){
    calcular();
}