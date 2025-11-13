export { calcularSubtotal, calcularIVA, calcularTotal };
// Función para calcular el subtotal
function calcularSubtotal(cantidad, precio) {
    return cantidad * precio;
}

// Funcion para calcular el IVA (19%)
function calcularIVA(subtotal) {
    return subtotal * 0.19;
}

// Funcion para calcular el total a pagar
function calcularTotal(subtotal, iva) {
    return subtotal + iva;
}