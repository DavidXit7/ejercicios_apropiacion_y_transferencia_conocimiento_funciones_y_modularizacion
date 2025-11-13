import { par_impar, positivo_negativo, es_primo } from "./modulos/par_impar_positivo_negativo_es_o_no_primo.js";

let num = Number(prompt("Digite su numero: "))

console.log(par_impar(num))

console.log(positivo_negativo(num))

console.log(es_primo(num))