let h1Texto = document.querySelector("#h1Texto");
let inputTexto = document.querySelector("#inputTexto");
let btTrocarTexto = document.querySelector("#btTrocarTexto");

function trocarTexto(){
    //retornando o texto digitado no campo
    let textoDigitado = inputTexto.value;

    //Alterando o texto do elemento do elemento h1
    h1Texto.textContent = textoDigitado;
}

btTrocarTexto.onclick = function(){
    trocarTexto();
}