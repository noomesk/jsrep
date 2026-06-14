//ejercicio 1: construir una función que recibe 2 parametros y saber cuál de esos dos va a ser el número mayor.
/*function cualEsMayor(a, b) {
}

let mayor = cualEsMayor(10,5);

console.log(mayor); */

// si intento imprimir no me devuelve nada, solucionar.
//SOLUCIÓN, primero pseudocod:
/*si a es mayor que b
    devolver a
si no
    devolver b */ //eso es else if

function cualEsMayor(a, b) {
if (a > b) {
    return a; 
} else {
    return b; 
}
}

let mayor = cualEsMayor(10,5);
    console.log("El número mayor es: ", mayor);
