	
var p = document.getElementById("texto");


  function amorRandom(){
  var numeroRandom = Math.floor(Math.random()*100);
  
  if(numeroRandom == 50){
    p.innerText = (numeroRandom + "% no se sabe que pasara.");
  }
  
   if(numeroRandom <= 10){
    p.innerText = (numeroRandom + "% ni los limones son tan secos.");
  }
  
  if(numeroRandom <= 49 && numeroRandom >= 11){
    p.innerText = (numeroRandom + "% hay un poquito de cariño.");
  }

  if(numeroRandom >= 51 && numeroRandom <= 65){
    p.innerText = (numeroRandom + "% van aumentando las posibilidades siga participando.");
  } 
  
   if(numeroRandom >= 66 && numeroRandom <= 90){
    p.innerText = (numeroRandom + "% Huele a amor.");
  } 
  
   if(numeroRandom >= 90){
   p.innerText = (numeroRandom + "% Se viene boda.");
  } 
  
  return numeroRandom;
}

amorRandom()