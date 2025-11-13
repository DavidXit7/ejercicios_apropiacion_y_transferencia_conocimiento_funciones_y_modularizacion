import { depositar, retirarDinero, mostrarSaldo } from "./modulos/depositar_retirar_saldo.js";

let saldo = 0;

let operacion = "";

while (operacion !== '4') {

    operacion = prompt("Seleccione una operacion: \n1. Depositar dinero \n2. Retirar dinero \n3. Consultar saldo \n4. Salir");

    switch (operacion) {

        case '1':
            saldo = depositar(saldo);
            break;

        case '2':
            saldo = retirarDinero(saldo);
            break;

        case '3':
            mostrarSaldo(saldo);
            break;

        case '4':
            alert("Gracias por usar el sistema.");
            break;
            
        default:
            alert("Operacion no valida.");
    }
}