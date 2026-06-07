// AND, OR Y NOT

//AND (&&): devuelve true si ambas condiciones son verdaderas, de lo contrario devuelve false
console.log(true && true); // true
console.log(true && false); // false
console.log(false && true); // false
console.log(false && false); // false  

let mayorDeEdad = true;
let suscrito = true;
console.log("operador and", mayorDeEdad && suscrito); // true, porque ambas condiciones son verdaderas 

//OR  (||): devuelve true si al menos una de las condiciones es verdadera, de lo contrario devuelve false
console.log(true || true); // true
console.log("operador or", mayorDeEdad || suscrito); //true, porque al menos una de las condiciones es verdadera

//NOT
console.log("operador not", !mayorDeEdad); // false, porque la negación de true es false
//Como mayor de edad es true, pero NOT es la negación entonces lo invierte y ahora quda false. 