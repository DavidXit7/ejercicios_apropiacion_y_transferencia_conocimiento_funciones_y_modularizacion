import { calculariva, Calculartotalconiva, Subtotal } from "./modulos/productos.js"


let nombre1 = prompt("Ingrese el nombre del producto uno: ")
let precio1 = parseFloat(prompt("Ingrese el precio: "))
let cantidad1 = parseInt(prompt("Ingrese la cantidad: "))

let nombre2 = prompt("Ingrese el nombre del producto dos: ")
let precio2 = parseFloat(prompt("Ingrese el precio: "))
let cantidad2 = parseInt(prompt("Ingrese la cantidad: "))

let nombre3 = prompt("Ingrese el nombre del producto tres: ")
let precio3 = parseFloat(prompt("Ingrese el precio: "))
let cantidad3 = parseInt(prompt("Ingrese la cantidad: "))


let Subtotal1 = Subtotal(precio1, cantidad1)
let Subtotal2 = Subtotal(precio2, cantidad2)
let Subtotal3 = Subtotal(precio3, cantidad3)

let TotalSinIva = Subtotal1 + Subtotal2 + Subtotal3
let iva = calculariva(TotalSinIva)
let Totalconiva = Calculartotalconiva(TotalSinIva, iva)


alert(`Producto_1: ${nombre1} - Producto_2: ${nombre2} - Producto_3: ${nombre3} - Total sin iva ${TotalSinIva} - Iva: ${iva} - Total a pagar ${Totalconiva}`)