let num1 = document.querySelector("#num1");
let btreajuste = document.querySelector("#btTrocaTexto");
let Saldo = document.querySelector("#Saldo");

function multiplicar () {
    let num = Number(num1.value);
    let resultado = num * 0.01;
    let reajustes = num + resultado
    Saldo.textContent=reajustes
}
document.getElementById("btreajuste").onclick = function () {multiplicar();}
