   let nota1Bim = document.querySelector("#nota1Bim");
   let nota2Bim = document.querySelector("#nota2Bim");
   let btAprovacao = document.querySelector("#btAprovacao");
   let h3Resultado = document.querySelector("#h3Resultado");

function calcularMediaAlunho(){
    //retornando valores dos inputs e
    //convertendo em números
    let nota1 = Number(nota1Bim.value);    
    let nota2 = Number(nota2Bim.value);

    //calcular a média
    let media = (nota1 +nota2) /2;

    //verificar se o aluno esta aprovado ou não
    if(media >= 60){
        h3Resultado.textContent = "o aluno está APROVADO!!!"
    }else{
        h3Resultado.textContent = "o aluno está REPROVADO!!!"
    }
}

btAprovacao.onclick = function(){
    calcularMediaAlunho();
}