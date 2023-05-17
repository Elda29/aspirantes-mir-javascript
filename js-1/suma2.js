function sumar(datos) {
    var total=0;
 
    for (let i = 0; i < datos.length; i ++) {
        //console.log(datos[i]);
        total+=  datos[i];
      }
   return total    
 }

 console.log(sumar([1, 2, 3]));
 //console.log(sum([10, 8, 12, 5])); // 35
 //console.log(sum([0])); // 0