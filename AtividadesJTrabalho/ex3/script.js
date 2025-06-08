let ano = document.querySelector("#ano")
let valor = document.querySelector("#valor")
let resultado = document.querySelector("#resultado")
let clas = document.querySelector("#clas")

function calcImposto() {
  let valano = parseFloat(ano.value)
  let valvalor = parseFloat(valor.value)

  if (isNaN(valano) || isNaN(valvalor)) {
    resultado.textContent = "0,00"
    clas.textContent = "Preencha todos os campos"
  } else if (valano < 1990) {
    let imposto = valvalor * 0.01 // 1%
    resultado.textContent = imposto.toFixed(2).replace(".", ",")
    clas.textContent = "Taxa de 1% (carro anterior a 1990)"
  } else if (valano >= 1990) {
    let imposto = valvalor * 0.015 // 1.5%
    resultado.textContent = imposto.toFixed(2).replace(".", ",")
    clas.textContent = "Taxa de 1,5% (carro de 1990 em diante)"
  } else {
    resultado.textContent = "0,00"
    clas.textContent = "Ano inválido"
  }
}
