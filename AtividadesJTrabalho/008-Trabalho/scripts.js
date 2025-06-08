let nivel = document.querySelector("#nivel");
let qtdHoras = document.querySelector("#qtdHoras");
let resultado = document.querySelector("#resultado");

function calcularSalario() {
    let nivelProf = Number(nivel.value);
    let horas = Number(qtdHoras.value);
    let valorHora = 0;

    if (nivelProf === 1) {
        valorHora = 12;
    } else if (nivelProf === 2) {
        valorHora = 17;
    } else if (nivelProf === 3) {
        valorHora = 25;
    } else {
        resultado.value = "Nível inválido";
        return;
    }

    let salario = valorHora * horas * 4.5;
    resultado.value = "Salário: R$" + salario.toFixed(2);
}