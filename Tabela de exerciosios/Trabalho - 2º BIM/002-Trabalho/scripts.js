let campoPeso = document.querySelector("#peso");
let campoAltura = document.querySelector("#altura");
let btCalcular = document.querySelector("#btCalcular");
let campoIMC = document.querySelector("#valorIMC");
let campoClassificacao = document.querySelector("#classificacao");

function calcularIMC() {
    let peso = Number(campoPeso.value);
    let altura = Number(campoAltura.value);

    if (peso > 0 && altura > 0) {
        let imc = peso / (altura * altura);
        campoIMC.value = imc.toFixed(2);

        let classificacao = "";

        if (imc < 18.5) {
            classificacao = "Abaixo do peso";
        } else if (imc >= 18.5 && imc <= 24.9) {
            classificacao = "Peso normal";
        } else if (imc >= 25 && imc <= 29.9) {
            classificacao = "Sobrepeso";
        } else if (imc >= 30 && imc <= 34.9) {
            classificacao = "Obesidade grau 1";
        } else if (imc >= 35 && imc <= 39.9) {
            classificacao = "Obesidade grau 2";
        } else {
            classificacao = "Obesidade grau 3";
        }

        campoClassificacao.value = classificacao;
    } else {
        campoIMC.value = "";
        campoClassificacao.value = "Preencha corretamente!";
    }
}

btCalcular.onclick = function() {
    calcularIMC();
}