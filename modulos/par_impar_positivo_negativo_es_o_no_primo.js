export function par_impar (num){
    if (num % 2==0){
        return "Par"
    }
    else{
        return "Impar"
    } 
}

export function positivo_negativo(num){
    if (num > 0){
        return "Positivo"
    } else{
        return "Negativo"
    }
}

export function es_primo(n){
    if (n <= 1) return "No es primo";
    
    for (let i = 2; i < n; i++) {

        if (n % i === 0){
            return "No es primo";
        } 
    }
    return "Es primo";
}