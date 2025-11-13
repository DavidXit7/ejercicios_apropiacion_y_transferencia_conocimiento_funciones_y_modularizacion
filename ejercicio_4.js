import { calcularSubtotal, calcularIVA, calcularTotal } from './modulos/sub_total_iva_total_pago.js';

// Pedir datos por teclado
let cantidad = parseFloat(prompt("Ingresa la cantidad de productos: "));
let precio = parseFloat(prompt("Ingresa el precio unitario: "));

// Validar que los datos sean numeros
if (isNaN(cantidad) || isNaN(precio)) {
    alert("Por favor, ingresa valores numéricos válidos.");
} else {
    // Calcular subtotal
    let subtotal = calcularSubtotal(cantidad, precio);

    // Calcular IVA
    let iva = calcularIVA(subtotal);

    // Calcular total
    let total = calcularTotal(subtotal, iva);
    
    // Mostrar en alertas también si quieres
    alert("Subtotal: $" + subtotal);
    alert("IVA (19%): $" + iva);
    alert("Total a pagar: $" + total);
}