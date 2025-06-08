let numero = document.querySelector("#numero");
let btCalcular = document.querySelector("#btCalcular");
let resultado = document.querySelector("#resultado");

function decomporNumero() {
    let num = Number(numero.value);
    let centena = Math.floor(num / 100);
    let dezena = Math.floor((num % 100) / 10);
    let unidade = num % 10;
    resultado.textContent = "CENTENA = " + centena + 
                            " | DEZENA = " + dezena + 
                            " | UNIDADE = " + unidade;
}

btCalcular.onclick = function() {
    decomporNumero();
}
