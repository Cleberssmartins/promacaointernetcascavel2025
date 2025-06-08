let salario = document.querySelector("#salario")
let codigo = document.querySelector("#codigo")
let resultado = document.querySelector("#resultado")
let clas = document.querySelector("#clas")

function calcSalario() {
  let valsalario = parseFloat(salario.value)
  let valcodigo = parseFloat(codigo.value)

  if (isNaN(valsalario) || isNaN(valcodigo)) {
    resultado.textContent = "0,00"
    clas.textContent = "Preencha todos os campos"
  } else if (valcodigo == 101) {
    let novoSalario = valsalario + valsalario * 0.1 // 10%
    resultado.textContent = novoSalario.toFixed(2).replace(".", ",")
    clas.textContent = "Gerente - Aumento de 10%"
  } else if (valcodigo == 102) {
    let novoSalario = valsalario + valsalario * 0.2 // 20%
    resultado.textContent = novoSalario.toFixed(2).replace(".", ",")
    clas.textContent = "Engenheiro - Aumento de 20%"
  } else if (valcodigo == 103) {
    let novoSalario = valsalario + valsalario * 0.3 // 30%
    resultado.textContent = novoSalario.toFixed(2).replace(".", ",")
    clas.textContent = "Técnico - Aumento de 30%"
  } else {
    let novoSalario = valsalario + valsalario * 0.4 // 40%
    resultado.textContent = novoSalario.toFixed(2).replace(".", ",")
    clas.textContent = "Cargo não encontrado - Aumento de 40%"
  }
}
