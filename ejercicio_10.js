import { raizCuadrada, division, multiplicacion, potencia, resta, suma } from "./modulos/calculadora.js";

let continuar = true

while (continuar) {
    let option = Number(prompt(`Digite la opcion de la operacion que deseas realizar: 
        1. Suma.
        2. Resta.
        3. Multiplicación.
        4. División.
        5. Potenciación.
        6. Raíz Cuadrada.
        0. Salir.`));

    if (option === 0) {
        console.log("¡Hasta luego!");
        continuar = false;
    } else if (option >= 1 && option <= 6) {
        let resultado;
        let num1, num2;

        if (option === 6) {
            num1 = Number(prompt("Ingresa el número para calcular la raíz cuadrada:"));
            resultado = raizCuadrada(num1);
        } else {
            num1 = Number(prompt("Ingresa el primer número:"));
            num2 = Number(prompt("Ingresa el segundo número:"));

            switch (option) {
                case 1:
                    resultado = suma(num1, num2);
                    break;
                case 2:
                    resultado = resta(num1, num2);
                    break;
                case 3:
                    resultado = multiplicacion(num1, num2);
                    break;
                case 4:
                    resultado = division(num1, num2);
                    break;
                case 5:
                    resultado = potencia(num1, num2);
                    break;
            }
        }
            
        console.log(`Resultado ${resultado}`);
    } else {
        console.log("Opción inválida. Intenta de nuevo.");
    }
}