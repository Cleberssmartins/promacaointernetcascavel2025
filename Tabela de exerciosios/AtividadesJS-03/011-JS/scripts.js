let salario = document.querySelector("#salario");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcularSalario() {
    let salarioInicial = Number(salario.value);
    let salarioAumentado = salarioInicial * 1.15;
    let salarioFinal = salarioAumentado * 0.92;
    resultado.textContent = "Inicial: R$" + salarioInicial.toFixed(2) + 
                            " | Aumentado: R$" + salarioAumentado.toFixed(2) + 
                            " | Final: R$" + salarioFinal.toFixed(2);
}

btCalcular.onclick = function() {
    calcularSalario();
}