	function amorRandom(){
  var numeroRandom = Math.floor(Math.random()*100);
  
  if(numeroRandom == 50){
    document.write(numeroRandom + "% no se sabe que pasara.");
  }
  
   if(numeroRandom <= 10){
    document.write(numeroRandom + "% ni los limones son tan secos.");
  }
  
  if(numeroRandom <= 49 && numeroRandom >= 11){
    document.write(numeroRandom + "% hay un poquito de cariño.");
  }

  if(numeroRandom >= 51 && numeroRandom <= 65){
    document.write(numeroRandom + "% van aumentando las posibilidades siga participando.");
  } 
  
   if(numeroRandom >= 66 && numeroRandom <= 90){
    document.write(numeroRandom + "% Huele a amor.");
  } 
  
   if(numeroRandom >= 90){
    document.write(numeroRandom + "% Se viene boda.");
  } 
  
  return numeroRandom;
}

amorRandom()