function suma(nro) {
   let i     = 1;
   var texto ="";
   var total = 0;

while (i <= nro) {
   if (i===1) {
      texto = texto + i; 
   } else {
      texto = texto + "+" + i; 
   }   
   total = total + i;
   i = i + 1;
}
console.log("Resultado para Sum(" + nro + ") : " + texto  + " = "+ total);
}

  
  suma(4);
  suma(10);
  suma(15);