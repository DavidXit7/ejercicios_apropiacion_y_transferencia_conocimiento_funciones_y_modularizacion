//se importa la funcion que esta dentro de la carpeta modulos y el archivo
import {saludoPersonalizado} from './modulos/saludo_personalizado.js';
//se piden los datos al usuario
let nomb = prompt("Ingrese su nombre: ");
let edad = prompt("Ingrese su edad: ");
let ficha= prompt ("Ingrese su ficha: ");

//se muestran los datos, llamando la funcion con los argumentos que recibio
alert(saludoPersonalizado(nomb,edad,ficha));