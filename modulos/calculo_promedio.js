export function calcularPromedio(n1, n2, n3) {
    return (n1 + n2 + n3) / 3;
}

export function esNumeroValido(n) {
    return typeof n === "number" && !Number.isNaN(n);
}

export function estadoAprobacion(promedio, linea = 70.0) {
    return promedio >= linea ? "APROBÓ" : "REPROBÓ";
}

export function mensajeFinalAcademico(nombre, promedio, estado) {
    return `Estudiante: ${nombre}\nPromedio: ${promedio.toFixed(2)}\nResultado: ${estado}`;
}