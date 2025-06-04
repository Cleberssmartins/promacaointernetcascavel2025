function somar() {
    let v1 = parseFloat(document.getElementById('num1').value);
    let v2 = parseFloat(document.getElementById('num2').value);
    let resultado = v1 + v2;
    document.getElementById('resultado').textContent = resultado;
  }

  document.getElementById("btsomar").onclick = somar;
