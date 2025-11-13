const validar_numero = (numero) => {
    if (isNaN(numero)){
        return false;
    }
    return true;
}

const validar_divisores = (numero) => {
    let bandera = true;
    
    if (validar_numero(numero)) {
        for (let i = 2; i * i <= numero; i++){
            if (numero % i === 0){
                bandera = false;
                break;
            }
        }
        return bandera;
    } else {
        alert(`No es un número`);
    }
}

export const mostrar_mensaje = (numero) => {
    if (validar_divisores(numero)) {
        alert(`El número ${numero} es primo`);
    } else {
        alert(`El número ${numero} no es primo`)
    }
}