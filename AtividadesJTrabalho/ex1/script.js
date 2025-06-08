let inputX = document.querySelector("#ladoX")
let inputY = document.querySelector("#ladoY")
let inputZ = document.querySelector("#ladoZ")
let botaoVerificar = document.querySelector("#verificarTriangulo")
let resultado = document.querySelector("#resultado")

function verificarTriangulo() {
  let x = Number(inputX.value)
  let y = Number(inputY.value)
  let z = Number(inputZ.value)

  // Verifica se os valores formam um triângulo
  if (x < y + z && y < x + z && z < x + y) {
    // Verifica o tipo do triângulo
    if (x === y && y === z) {
      resultado.innerHTML = "É um triângulo equilátero."
    } else if (x === y || x === z || y === z) {
      resultado.innerHTML = "É um triângulo isósceles."
    } else {
      resultado.innerHTML = "É um triângulo escaleno."
    }
  } else {
    resultado.innerHTML = "Os valores informados não formam um triângulo."
  }
}

botaoVerificar.onclick = function () {
  verificarTriangulo()
}
