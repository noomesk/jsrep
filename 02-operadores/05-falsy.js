//short circuit 

//false
//false
//0
//""
//null
//undefined
//NaN

//a los anteriores valores se les conoce como valores falsy, es decir, que se consideran falsos en un contexto booleano.
//todos los demás valores se consideran verdaderos, es decir, truthy.
let nombre = "Paquito feli";
let username = nombre || "Anonimo";
console.log(username); 

//funciones
function fn1() {
    console.log("soy funcion 1");
    return false;
}

function fn2() {
    console.log("soy funcion 2");
    return true;
}

let x = fn1() && fn2();
