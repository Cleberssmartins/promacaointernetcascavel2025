let inputSabor1 = document.querySelector("#inputSabor1");
let inputSabor2 = document.querySelector("#inputSabor2");
let inputSabor3 = document.querySelector("#inputSabor3");
let inputSabor4 = document.querySelector("#inputSabor4");
let inputRefri = document.querySelector("#inputRefri");
let btFinalizar = document.querySelector("#btFinalizar");
let resumoPedido = document.querySelector("#resumoPedido");

function geraPedidoPizza(){

    let qtdRefri = 0;
    let qtdSabor = 0;
    let sabores = "Sabores selecionados:<br>";

    if(inputSabor1.value != ""){
        qtdSabor = qtdSabor + 1;
        sabores = sabores + inputSabor1.value+"<br>";
    }
    if(inputSabor2.value != ""){
        qtdSabor = qtdSabor + 1;
        sabores = sabores + inputSabor2.value+"<br>";
    }
    if(inputSabor3.value != ""){
        qtdSabor = qtdSabor + 1;
        sabores = sabores + inputSabor3.value+"<br>";
    }
    if(inputSabor4.value != ""){
        qtdSabor = qtdSabor + 1;
        sabores = sabores + inputSabor4.value+"<br>";
    }
    qtdRefri = Number(inputRefri.value) * 7;

    resumoPedido.innerHTML = sabores+
                            "Total Pizza: R$"+(qtdSabor * 12).toFixed(2)+"<hr>"+
                            "Quantidade de Refrigerante: "+inputRefri.value+"<br>"+
                            "Total Refrigerante: R$"+qtdRefri.toFixed(2)+"<hr>"+
                            "Total do Pedido R$"+((qtdSabor * 12)+qtdRefri).toFixed(2)+"<hr>"

}

btFinalizar.onclick = function(){
    geraPedidoPizza();
}