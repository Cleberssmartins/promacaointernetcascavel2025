let dias = document.querySelector("#dias");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function converterTempo() {
    let anos = Math.floor(Number(dias.value) / 365);
    let meses = Math.floor((Number(dias.value) % 365) / 30);
    let diasRestantes = (Number(dias.value) % 365) % 30;
    resultado.textContent = anos + " anos, " + meses + " meses, " + diasRestantes + " dias sem acidentes.";
}

btCalcular.onclick = function() {
    converterTempo();
}