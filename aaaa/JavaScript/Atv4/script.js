let lado1 = document.querySelector('#ladox');
let lado2 = document.querySelector('#ladoy');
let lado3 = document.querySelector('#ladoz');
let Mensagem = document.querySelector('#mensagem');
let triangulo = document.querySelector('#triangulo');

function calctriangulo(){
    let valLado1 = parseFloat(lado1.value);
    let valLado2 = parseFloat(lado2.value);
    let valLado3 = parseFloat(lado3.value);

    if (valLado1+valLado2 > valLado3 && valLado1+valLado3>valLado2 && valLado2+valLado3 > valLado1){
        Mensagem.textContent= "é um triangulo";  
        
        if (valLado1 === valLado2 && valLado2 === valLado3) {
            triangulo.textContent= "Equilátero";
        }else if (valLado1 != valLado2 && valLado2 != valLado3){
            triangulo.textContent = "Escaleno";
        }else{
            triangulo.textContent = "Isósceles";
        }
    }else{
        Mensagem.textContent = "n é triangulo"
    }
}


//valLado1 != valLado2 && valLado2 != valLado3
//valLado1 === valLado2 || valLado2 === valLado3 || valLado3 === valLado1