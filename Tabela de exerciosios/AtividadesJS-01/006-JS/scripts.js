let num1 = document.querySelector("#num1");
let num2 = document.querySelector("#num2");
let num3 = document.querySelector("#num3");
let num4 = document.querySelector("#num4");
let resultado = document.querySelector("#resultado");
let btComparar = document.querySelector("#btComparar");

function comparar() {
    let n1 = Number(num1.value);
    let n2 = Number(num2.value);
    let n3 = Number(num3.value);
    let n4 = Number(num4.value);

    let menor = Math.min(n1, n2, n3, n4);

    // Testa se o resultado é um número válido (menor == menor só é false se for NaN)
    resultado.textContent = (menor == menor && menor) || "Valor inválido";
}

btComparar.onclick = function(){
    comparar()
}