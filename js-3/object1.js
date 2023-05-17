let pedro = [{
  nombre: "Pedro",
  apellido: "Perez",
  edad: 30,    
  hobbies: ["programa", "squash", "piano"],
  estatura: 1.8,
  saludar: function() {
    return "  Hola, me llamo " + this.nombre + " " + this.apellido}
  }];

  console.log(" ************* 1 era parte del ejercicio ****************" ); 
  console.log(" " ); // imprime linea  en blanco
  console.log("  Edad :" + pedro[0].edad); // imprime edad
  console.log(" " ); // imprime linea  en blanco

  console.log(" ************* 2 da parte del ejercicio ****************" ); 
    

  for (let i=0; i < pedro.length; i++) {
    let linea = pedro[i];
    console.log("  Nombre:   " + linea.nombre);
    console.log("  Apellido: " + linea.apellido);
    console.log("  Edad:     " + linea.edad);
    console.log("  Estatura: " + linea.estatura);
    console.log("  Hobbies:  " + linea.hobbies);    
    console.log("  Saludo :  " + linea.saludar());    
  }

  