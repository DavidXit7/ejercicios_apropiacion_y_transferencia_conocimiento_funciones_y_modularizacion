`Reto 1 Sistema de cálculo académico
Crea un programa modularizado que permita registrar el nombre y tres notas de un
estudiante.
Debe cumplir con las siguientes funciones:
• Una función para calcular el promedio.
• Una función para determinar si aprueba o reprueba.
• Una función principal que muestre el mensaje final con nombre y resultado.
Aplica retorno de valores y estructuras condicionales.`

import { calcularPromedio, esNumeroValido, estadoAprobacion, mensajeFinalAcademico } from "./modulos/calculo_promedio.js";



const nombre = prompt("Nombre del estudiante:");
const not1 = parseFloat(prompt("Nota 1:"));
const not2 = parseFloat(prompt("Nota 2:"));
const not3 = parseFloat(prompt("Nota 3:"));

if (nombre && esNumeroValido(not1) && esNumeroValido(not2) && esNumeroValido(not3)) {
    const prom = calcularPromedio(not1, not2, not3);
    const estado = estadoAprobacion(prom);
    alert(mensajeFinalAcademico(nombre.trim(), prom, estado));
} else {
    alert("Datos inválidos. Intenta de nuevo.");
}