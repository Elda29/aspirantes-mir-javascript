function sum(datos) {
    var total=0;
    var texto = "";
 
    for (let i = 0; i < datos.length; i ++) {
        //console.log(datos[i]);
        total+=  datos[i];
          if (i===0) {
            texto =  texto + datos[i];
          } else {
            texto =  texto + "," + datos[i];
          }          
                   
      }
   return "Prueba de la función Sum, para los valores --> " + texto + " = " + total ;   
 }

 console.log(sum([1, 2, 3]));
 console.log(sum([10, 8, 12, 5])); // 35
 console.log(sum([0])); // 0

 function max(datos) {
    
    if (datos.length===0) {
      return "Prueba de la función Max, para los valores --> [] = Undefined";      
    } 
    var maximo = datos[0];
    var texto = "";

    for (let i = 0; i < datos.length; i ++) {
        if (datos[i] > maximo) {
            maximo = datos[i];
        }
        if (i===0) {
          texto =  texto + datos[i];
        } else {
          texto =  texto + "," + datos[i];
        }        
        
      }
   return "Prueba de la función Max, para los valores --> " + texto + " = " + maximo;    
 }

console.log(max([1, 3, 2])) // 3
console.log(max([10, 9, 8, 7, 6, 5, 4])) // 10
console.log(max([])) // undefined


function maxIndex(datos) {
    
  if (datos.length===0) {
    return "Prueba de la función maxIndex, para los valores --> [] = -1";      
  } 
  var maximo = datos[0];
  var IndiceMaximo=0;
  var texto = "";

  for (let i = 0; i < datos.length; i ++) {
      if (datos[i] > maximo) {
          maximo = datos[i];
          IndiceMaximo = i;
      }
      if (i===0) {
        texto =  texto + datos[i];
      } else {
        texto =  texto + "," + datos[i];
      }        
      
    }
 return "Prueba de la función maxIndex, para los valores --> " + texto + " = " + IndiceMaximo;    
}

console.log(maxIndex([1, 3, 2])) // 1
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4])) // 0
console.log(maxIndex([])) // -1

