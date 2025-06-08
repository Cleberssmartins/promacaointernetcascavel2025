let preco = document.querySelector("#preco");
let condicao = document.querySelector("#condicao");
let resultado = document.querySelector("#resultado");
let calcular = document.querySelecotr("#resultado");

function calcularPagamento() {
    let valor = Number(preco.value);
    let codigo = condicao.value.toLowerCase();
    let total = 0;

    if (codigo === "a") {
        total = valor * 0.90;
    } else if (codigo === "b") {
        total = valor * 0.85;
    } else if (codigo === "c") {
        total = valor;
    } else if (codigo === "d") {
        total = valor * 1.10;
    } else {
        resultado.value = "Código inválido";
        return;
    }

    resultado.value = "Total a pagar: R$" + total.toFixed(2);
}

calcular.onclick = function(){
    calcularPagamento();
}