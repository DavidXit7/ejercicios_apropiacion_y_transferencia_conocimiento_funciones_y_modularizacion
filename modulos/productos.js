
export function Subtotal(precio,cantidad)
{
    return cantidad*precio
}
export function calculariva(TotalSinIva)
{
    return TotalSinIva * 0.19;
}

export const Calculartotalconiva = (TotalSinIva,iva)=> TotalSinIva +iva;
