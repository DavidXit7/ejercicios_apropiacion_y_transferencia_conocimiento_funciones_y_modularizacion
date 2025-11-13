// Reto 5 – Reto creativo
// Propón y desarrolla un programa propio donde apliques los conceptos de:
// • Funciones tradicionales y funciones flecha.
// • Parámetros y argumentos.
// • Retorno de valores.
// • Modularización y buenas prácticas.

// Función Expresada para Suma
export const suma = function(a, b) {
    return a + b;
}

// Función Expresada para Resta
export const resta = function(a, b) {
    return a - b;
}

// Función Declarada para Multiplicación
export function multiplicacion(a, b) {
    return a * b;
}

// Función Declarada para División
export function division(a, b) {
    if (b === 0) {
        return "División por cero.";
    }
    return a / b;
}

// Función flecha para potenciación
export const potencia = (base, exponente) => {
    return Math.pow(base, exponente);
};

// Función flecha para raíz cuadrada
export const raizCuadrada = (numero) => {
    if (numero < 0) {
        return "No se puede calcular la raíz de un número negativo.";
    }
    return Math.sqrt(numero);
};