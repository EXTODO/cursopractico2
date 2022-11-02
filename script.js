 const h1 =document.querySelector("h1");
const input1 = document.querySelector("#calculo1");
const form = document.querySelector("#form");
const input2 = document.querySelector("#calculo2");
const btn = document.querySelector("#btnCalcular");
const pResult=document.querySelector('#result');

form.addEventListener('submit',sumaInputValues);


function sumaInputValues(event) {
    event.preventDefault ();
    const sumaImputs= input1.value + input2.value;
   pResult.innerText="Resultado: " + sumaImputs;
  
}