import { contar } from "./modulos/contar_hasta.js";

let opcion = 0;
while(true)
{
    let bandera = false;
    opcion = parseInt(prompt(`Bienvenido al sistema
        1. Contar hasta X número
        2. Salir
        Ingrese una opción:
        `));
    switch(opcion)
    {
        case 1:
            let numero = parseInt(prompt("Ingrese un número positivo"));
            let contador = contar(numero);
            if (contador)
            {
                alert(`Conteo hasta ${numero} finalizado`)
            }
            else{
                alert(`Opcion no valida`)
            }
            break;
        case 2: 
            alert("Gracias por usar el programa.")
            bandera = true;
            break;
        default:
            alert("Opcion no valida")
            break;
    }
    if( bandera)
    {
        break;
    }
}