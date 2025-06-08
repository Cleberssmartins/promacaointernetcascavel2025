    let valorPago = document.querySelector("#valorPago");
    let precoProduto = document.querySelector("#precoProduto");
    let btTroco = document.querySelector("#btTroco");
    let resultado = document.querySelector("#resultado");

function calcularTroco(){
    let Pago = Number(valorPago.value);
    let Preco = Number(precoProduto.value);

    let valorfinal = Pago - Preco
    resultado.value = valorfinal;
}

btTroco.onclick = function(){
    calcularTroco();
}