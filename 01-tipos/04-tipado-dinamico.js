let numero = 451;
let nombre = "Angie";
let verdadero = true;
let undef;
let nulo = null;

//nombre = 123; // el tipo de dato se puede cambiar, es decir, no es necesario declarar el tipo de dato al momento de crear la variable, esto es lo que se conoce como tipado dinámico

//console.log(nombre);
// como puedo ver, el valor de la variable nombre ha cambiado a un número, aunque antes era una cadena de texto, esto es lo que se conoce como tipado dinámico, es decir, el tipo de dato de una variable puede cambiar a lo largo del tiempo.
console.log(typeof numero);
console.log(typeof nombre);
console.log(typeof verdadero);
console.log(typeof undef);
console.log(typeof nulo);

// ¿por qué null debuelve un objeto? esto es un error en JavaScript, pero se mantiene por razones de compatibilidad, es decir, si se cambiara el tipo de dato de null a null, muchas aplicaciones que dependen de este comportamiento dejarían de funcionar, por lo tanto, se decidió mantener este error en el lenguaje.