let cotacao = document.querySelector("#cotacao");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcular() {
    let valor = Number(cotacao.value);

    let r1 = (valor * 1.01).toFixed(2);
    let r2 = (valor * 1.02).toFixed(2);
    let r5 = (valor * 1.05).toFixed(2);
    let r10 = (valor * 1.10).toFixed(2);

    resultado.innerHTML = 
        "1%: " + r1 + "<br>" +
        "2%: " + r2 + "<br>" +
        "5%: " + r5 + "<br>" +
        "10%: " + r10;
}

btCalcular.onclick = function(){
    calcular();
}