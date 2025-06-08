let entrada = document.querySelector("#entrada");
let resultado = document.querySelector("#resultado");
let verificar = document.querySelector("#btverificar");

function verificarNumero() {
  let numero = Number(entrada.value);
  let mensagem = (numero % 2 !== 0) ? "É ímpar!" : "Não é ímpar.";
  resultado.textContent = mensagem;
}

btverificar.onclick = function (){
    verificarNumero()
}