

String.prototype.replaceAt=function(index, character) 
{ return this.substring(0, index) + character + this.substring(index+character.length); } 

//conjunto de palabras para el juego
const button=document.querySelector('#calcular');//asignando button a boton calcular
const palabras=['casa','perro','maestro','codigo'];

//palabra randon
const palabra= palabras[Math.floor(Math.random()*palabras.length)];

//remplazar las palbras por guion y espacio
let palabraConGuiones = palabra.replace(/./g,"_ ");

let contadorFallos=0;

