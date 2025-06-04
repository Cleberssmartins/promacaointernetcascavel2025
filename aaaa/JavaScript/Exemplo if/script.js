let nota1 = document.querySelector("#nota1");
let nota2 = document.querySelector("#nota2");
let btaprovacao = document.querySelector("#btaprovacao");
let h3Resultado = document.querySelector("#h3Resultado");

function calcularMediaAluno(){ 
    let notabim1 = number(nota1.value);
    let notabim2 = number(nota2.value);

    let media = (notabim1 + notabim2) / 2;

    if(media >= 60){
        h3Resultado.textContent = "O Aluno Aprovado!!!"
    }else{
        h3Resultado.textContent = "O Aluno Reprovado!!!"
    }
}
btaprovacao.onclick= function(){
    calcularMediaAluno();
}
