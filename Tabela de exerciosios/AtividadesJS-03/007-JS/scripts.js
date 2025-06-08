let dia = document.querySelector("#dia");
let mes = document.querySelector("#mes");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function calcularDiasPassados() {
    let dias = (Number(mes.value) - 1) * 30 + Number(dia.value);
    resultado.textContent = "Dias passados desde o início do ano: " + dias;
}

btCalcular.onclick = function() {
    calcularDiasPassados();
}