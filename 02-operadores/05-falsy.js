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
let nombre = "";
let username = nombre || "Anonimo";
console.log(username); 
