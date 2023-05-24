
console.log(" " ); // imprime linea  en blanco
console.log(" ************************* Bonus II  ***********************************" ); 
console.log(" " ); // imprime linea  en blanco



  let ingredientes = [
    { nombre: "Pan", cantidad: 2 },
    { nombre: "Queso", cantidad: 1 }
  ];
  
  let receta = 
    { nombre: "Sandwich", ingredientes }   
  ;

  let total = 0;

  for (let i=0; i < receta.length; i++) {
    let mostrar = receta[i];
    console.log(" " + mostrar.nombre);
    
  }
  for (let j=0; j < ingredientes.length; j++) {
    mostrar = ingredientes[j];
    
    console.log("  ** Nombre del Ingrediente  : " + mostrar.nombre);
    console.log("  ** Cantidad del Ingrediente: " + mostrar.cantidad);
    total= total + mostrar.cantidad;
    
  }
  console.log("  ====== Total ingredientes--> " + total);
  console.log(" " ); // imprime linea  en blanco