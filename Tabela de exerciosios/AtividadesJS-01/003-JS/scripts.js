  let saldo = document.querySelector("#saldo");
  let num1 = document.querySelector("#num1");
  let btReajuste = document.querySelector("#btReajuste");

  function reajustarSaldo(){
    let num = Number(num1.value);

    let resultado = num * 0.01;
    let reajuste = num + resultado 
    saldo.textContent = reajuste ;
  }

  btReajuste.onclick = function(){
    reajustarSaldo()
  }