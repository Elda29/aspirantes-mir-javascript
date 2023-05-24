let pedro = {
  Nombre: "Pedro",
  Apellido: "Perez",
  Edad: 30,
  Hobbies: ["programa", "squash", "piano"],
  Estatura: 1.8,
  Saludar: function () {
    console.log( "  Hola, me llamo " + this.Nombre + " " + this.Apellido);
  },
};

console.log(" "); // imprime linea  en blanco
console.log(" ************* Imprime en la consola el valor de la llave edad ****************");
console.log(" "); // imprime linea  en blanco

let llave = "Edad";

console.log("  "+llave+ "  :" +pedro[llave]);

console.log(" "); // imprime linea  en blanco
console.log(" ************* Recorre todas las propiedades e imprímelas en consola ****************");
console.log(" ******************     Probando con hasOwnProperty   *******************************");
console.log(" "); // imprime linea  en blanco
for (let llave in pedro) {
  if (pedro.hasOwnProperty(llave)) {
    console.log("  "+llave+ ": " + pedro[llave])
  }
}

console.log(" ************* Recorre todas las propiedades e imprímelas en consola ****************");
console.log(" ******************     Probando con Object.keys***   *******************************");
console.log(" "); // imprime linea  en blanco

let llaves = Object.keys(pedro);
for (let i=0; i < llaves.length; i++) {
  let llave = llaves[i];
  console.log("  "+llave+ ": " + pedro[llave]);
}

console.log(" ******************   Llamado a la función saluda    *******************************");
console.log(" "); // imprime linea  en blanco
pedro.Saludar();
console.log(" "); // imprime linea  en blanco
