let altura = document.querySelector('#altura');
let clas = document.querySelector('#clas');
let peso = document.querySelector('#peso');
let resultado = document.querySelector('#resultado');

function calcIMC(){
   let valpeso = parseFloat(peso.value);
   let valaltura = parseFloat(altura.value);
   let formula = valpeso/(valaltura*valaltura);

   if (formula < 18.5){
    resultado.textContent = formula;
    clas.textContent = "Abaixo do peso";
   }else if(formula > 18.5 && formula < 24.9){
    resultado.textContent = formula;
    clas.textContent = "peso normal";
   }else if(formula > 25 && formula < 29.9){
    resultado.textContent = formula;
    clas.textContent = "sobrepeso";
   }else if(formula > 30 && formula < 34.9){
    resultado.textContent = formula;
    clas.textContent = "obesidade grau 1";
   }else if(formula > 35 && formula < 39.9){
    resultado.textContent = formula;
    clas.textContent = "obesidade grau 2";
   }else{
    resultado.textContent = formula;
    clas.textContent = "obesidade grau 3";
   };
}

