let persona = [{
    nombre: "Pedro",
    edad: 30,    
    ciudad: "Caracas",
    profesión: "Arquitecto",
    hobbies:["programar", "squash", "piano", "música"]
    }]; 

    console.log(" " ); // imprime linea  en blanco
    console.log(" ************* BONUS I ****************" ); 
    console.log(" " ); // imprime linea  en blanco

    for (let i=0; i < persona.length; i++) {
        let linea = persona[i];
        console.log("  Nombre:     " + linea.nombre);
        console.log("  Edad:       " + linea.edad);
        console.log("  Ciudad:     " + linea.ciudad);
        console.log("  Profesión:  " + linea.profesión);   
      }
    

      function presentacion(objetopersona) {
        let texto=""
        for (let i=0; i < objetopersona.length; i++) {
            let l = objetopersona[i];
            texto= "  Nombre: " + l.nombre + ",  Edad: " + l.edad + ",  Ciudad: " + l.ciudad;
          }
        return texto
      }

            
      mensaje = presentacion(persona);

      console.log(" " ); // imprime linea  en blanco
      console.log(" ************* Impresión de variable mensaje usada desde función  ****************" ); 
      console.log(" " ); // imprime linea  en blanco
     
      console.log(" Llamado de función presentación : " + mensaje); // imprime linea  en blanco

      console.log(" " ); // imprime linea  en blanco
      console.log(" ************* Imprime en la consola la propiedad hobbies del objeto persona******" ); 
      console.log(" " ); // imprime linea  en blanco
      console.log("  Hobbies:  " + persona[0].hobbies );

      console.log(" " ); // imprime linea  en blanco
      console.log(" ************* Utiliza un ciclo for para imprimir arreglo hobbies ******" ); 
      console.log(" " ); // imprime linea  en blanco
   
      for (let i=0; i < persona.length; i++) {
        let linea = persona[i];
        console.log("  Hobbies:     " + linea.hobbies.join(" - "));
        
      }  
        

   