    let codigo = document.querySelector("#codigo");
    let quantidade = document.querySelector("#quantidade");
    let resultado = document.querySelector("#resultado");
    let calcular = document.querySelector("#calcular");

    function calcularValor() {
        let cod = codigo.value.trim().toLowerCase();
        let qtd = Number(quantidade.value);
        let preco = 0;

        if (cod == "cachorro quente") preco = 11.00;
        else if (cod == "bauru") preco = 8.50;
        else if (cod == "misto quente") preco = 8.00;
        else if (cod == "hamburguer") preco = 9.00;
        else if (cod == "cheeseburguer") preco = 10.00;
        else if (cod == "refrigerante") preco = 4.50;
        else {
            resultado.value = "Código inválido";
            return;
        }

        let total = preco * qtd;
        resultado.value = "Total a pagar: R$" + total.toFixed(2);
    }

    calcular.onclick = function(){
        calcularValor();
    }