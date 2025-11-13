//se crea la funcion saludpoPersonalizado que recibe 3 parametros
export const saludoPersonalizado = (nombre, edad, ficha) => {
    //retorna el mensaje que ha recibido con los argumentos nombre, edad y ficha
    return  `Bienvenido, ${nombre}, tienes ${edad} años de edad y perteneces a la ficha numero ${ficha}!!`;
}