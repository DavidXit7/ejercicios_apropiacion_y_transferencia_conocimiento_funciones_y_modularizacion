export function depositar(saldo) {
    let deposito = parseFloat(prompt("Ingrese la cantidad a depositar:"));

    if (!isNaN(deposito) && deposito > 0) {
        
        saldo += deposito;

        alert(`Deposito exitoso. Saldo actual: ${saldo}`);

        return saldo;
    } else {
        alert("Cantidad invalida.");
    }
}

export function retirarDinero(saldo) {
    let retiro = parseFloat(prompt("Ingrese la cantidad a retirar:"));

    if (!isNaN(retiro) && retiro > 0 && retiro <= saldo) {

        saldo -= retiro;

        alert(`Retiro exitoso. Saldo actual: ${saldo}`);

        return saldo;
    } else {
        alert("Cantidad invalida o saldo insuficiente.");
    }
}

export function mostrarSaldo(saldo) {
    alert(`Saldo actual: ${saldo}`);
}