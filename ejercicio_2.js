import { calcular_promedio_notas } from "./modulos/calcular_prom.js";

// Función con parámetros y retorno

// se piden las notas al usuario
let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));
// se llama la función calcularPromedio
let promedioFinal = calcular_promedio_notas(nota1, nota2, nota3);
// se muestra el resultado
alert("El promedio final es: " + promedioFinal);

// se verifica si el estudiante aprobó o reprobó
if (promedioFinal >= 3.0) {
    alert("El estudiante aprobó.");
} else {
    alert("El estudiante reprobó.");
}


