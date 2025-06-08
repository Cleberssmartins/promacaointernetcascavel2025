  let saldo = document.querySelector("#saldoMedio");
  let resultado = document.querySelector("#resultado");
  let calcular = document.querySelector("#calcular");

  function calcularCredito() {
        let saldoMedio = Number(saldo.value);
        let credito = 0;

        if (saldoMedio >= 201 && saldoMedio <= 400) {
            credito = saldoMedio * 0.20;
        } else if (saldoMedio >= 401 && saldoMedio <= 600) {
            credito = saldoMedio * 0.30;
        } else if (saldoMedio > 600) {
            credito = saldoMedio * 0.40;
        } else {
            credito = 0; // Nenhum crédito para saldo entre 0 e 200
        }

        resultado.value = "Saldo Médio: R$" + saldoMedio.toFixed(2) + " - Crédito: R$" + credito.toFixed(2);
  }

  calcular.onclick = function(){
    calcularCredito();
  }