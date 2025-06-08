   let num1 = document.querySelector("#num1");
   let num2 = document.querySelector("#num2");
   let resultado = document.querySelector("#resultado");
   let btComparar = document.querySelector("#btComparar");

function comparar() {
    let n1 = Number(num1.value);
    let n2 = Number(num2.value);
    let maior = Math.max(n1, n2);
    
    // Se for NaN, o resultado de `maior == maior` será false
    resultado.textContent = (maior == maior && maior) || "Valor inválido";
}

btComparar.onclick = function(){
    comparar()
}