let valor1 = document.querySelector("#pirmeiroValor");
let valor2 = document.querySelector("#segundoValor");
let btSoma = document.querySelector("#btSoma")
let resultado = document.querySelector("#resultado")



function somar(){
    let primeiroValor = Number(valor1.value);
    let segundoValor = Number(valor2.value);
    resultado.value = primeiroValor + segundoValor;
}
 
btSoma.onclick = function(){
    somar();
}