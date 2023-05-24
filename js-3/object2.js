let persona = {
  Nombre: "Pedro",
  Edad: 30,
  Ciudad: "Caracas",
  Profesión: "Arquitecto",
  Hobbies: ["programar", "squash", "piano", "música"],
};

console.log(" "); // imprime linea  en blanco
console.log( " **************************         BONUS I      ***************************");
console.log(  " *************	Imprime en la consola el objeto persona completo   *********");
console.log(" "); // imprime linea  en blanco

for (let llave in persona) {
  if (persona.hasOwnProperty(llave)) {
    console.log("  " + llave + ": " + persona[llave]);
  }
}

function presentacion(objetopersona) {
        let texto=""

        let llavef = "Nombre";
        texto = texto + llavef + ": " +objetopersona[llavef] + " - ";
        llavef = "Edad";
        texto = texto + llavef + ": " +objetopersona[llavef] + " - ";
        llavef = "Ciudad";
        texto = texto + llavef+ ": " +objetopersona[llavef] ;
          
        return texto
      }

console.log(" "); // imprime linea  en blanco
console.log( " ******************         BONUS I      *********************************************");
console.log( " ******************   Impresión desde la consola la varable mensaje *** *************");
console.log(" "); // imprime linea  en blanco
    
let mensaje = presentacion(persona);

console.log("  " +mensaje);

console.log(" " ); // imprime linea  en blanco

console.log(" ************* Imprime en la consola la propiedad hobbies del objeto persona******" ); 
console.log(" " ); // imprime linea  en blanco

let texto=""
llavef = "Hobbies";
texto = texto + llavef + ": " +persona[llavef] + " - ";

console.log( "  " +texto );

console.log(" " ); // imprime linea  en blanco
console.log(" ************* Utiliza un ciclo for para imprimir arreglo hobbies ******" ); 
console.log(" " ); // imprime linea  en blanco
  
for (let llave in persona) {  
  if (persona.hasOwnProperty(llave)) {      
   
    if (llave ==="Hobbies") {
      console.log(llave + " :");  
      for (let i=0; i < persona.Hobbies.length; i++) {
        let linea = persona.Hobbies[i];
        console.log( "   " + linea);
        
      }
      
    }
    
  }
}

/**/  
