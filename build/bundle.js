"use strict";
// tipo de datos booleam
let estado = false;
if (estado) {
    console.log("verdadero");
}
else {
    console.log("falso");
}
//funciones
function obteneredad(x, y) {
    return x + y;
}
console.log(obteneredad(5, 6));
function saludar() {
    console.log("hola");
}
console.log(saludar());
// string
let nombre = "eduardo";
let apellido = "palma";
let concat = nombre + apellido;
// let concat2:string = comillas dobles ${variable} ${otra variable};
console.log(concat);
if (nombre == "eduardo") {
    console.log("iguales");
}
else {
    console.log("no iguales");
}
// arreglos
let numeros = [];
numeros.push(2);
numeros.push(4);
numeros.push(5);
console.log(numeros);
let nombres = [];
nombres.push("eduardo");
nombres.push("alejandro");
console.log(nombres);
console.log(nombres[0]);
// tuplas, iguales a los hechos en python
let date;
date = ["eduardo", 23];
console.log(date);
date[0] = "alejandro";
console.log(date);
// enum
var Estado;
(function (Estado) {
    Estado[Estado["activo"] = 0] = "activo";
    Estado[Estado["noActivo"] = 1] = "noActivo";
})(Estado || (Estado = {}));
console.log(Estado);
console.log(Estado[0]);
// tipo any
let cualquierValor;
cualquierValor = "eduardo";
console.log(cualquierValor);
cualquierValor = false;
console.log(cualquierValor);
// null
// let valor:number = null;
let mivariable;
console.log(mivariable);
// sirve para verificar el tipo de variable
console.log(typeof mivariable);
let varialbe = 22;
console.log(typeof varialbe);
// casteo de variable
let valor = "un valor";
let resultado = valor.length;
let resultado2 = valor.length;
// palabra reservada let y var
var numero = 100;
var numero = 23;
let cadena = "eduardo";
// es variable solo para la seccion de codigo
// let cadena = "cadena"
for (var i = 0; i < 10; i++) {
    const element = i;
    console.log(element);
}
// al no estar definido ocurre un error si el atributo es de tipo  let console.log(i)
console.log(i);
// const similiar a como se comporta let
const ESTADO = false;
// ocurrre error ESTADO = true
if (true) {
    const ESTADO = true;
}
else {
}
for (const it of [1, 2, 3, 4, 5, 6]) {
    console.log(it);
}
// objeto
let Persona;
let persona = {
    nombre: "eduardo",
    edad: 25
};
console.log(persona);
// valores default si el valor contiene un ? es opcional de ingresar en la funcion
function ObtenerValores(objeto) {
    let { valor1, valor2 } = objeto;
    console.log(valor1);
    console.log(valor2);
}
ObtenerValores({ valor1: "eduardo" });
// objetos y clases
class Person {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
    getEdad() {
        return 25 + 1;
    }
}
let person = new Person("eduardo", 25);
person.edad;
person.nombre;
console.log(person.getEdad);
console.log(person.edad);
class usuario {
    constructor(nombre, edad, rut) {
        this.nombre = nombre;
        this.edad = edad;
        this.rut = rut;
    }
    get getNombre() {
        return this.nombre;
    }
    get getEdad() {
        return this.edad;
    }
    get getRut() {
        return this.rut;
    }
}
let u = new usuario("eduardo", 25, "19494");
console.log(u.getNombre);
