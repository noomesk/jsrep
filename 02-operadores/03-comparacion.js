// operadores relacionales:
let a = 10;
console.log(a > 5); // true, porque 10 es mayor que 5
console.log(a >= 5); // true, porque 10 es mayor o (OR) igual que 5
console.log(a < 5); // false, porque 10 no es menor que 5
console.log(a <= 5); // false, porque 10 no es menor o (OR) igual que 5

//operadores de igualdad:  
console.log(a === 10); //true, son iguales
console.log(a != 10); //false, no son diferentes
console.log(a == "10"); 
console.log(a === "10"); //false, porque el operador de igualdad estricta (===) compara tanto el valor como el tipo de dato, y en este caso, a es un número (10) y "10" es una cadena de texto, por lo tanto, aunque ambos tienen el mismo valor numérico, no son del mismo tipo de dato, por lo que la comparación devuelve false. En cambio, el operador de igualdad (==) solo compara el valor, sin importar el tipo de dato, por lo que en este caso devuelve true, porque ambos tienen el mismo valor numérico (10).
console.log(a !== "10"); //true, porque el operador de desigualdad estricta (!==) compara tanto el valor como el tipo de dato, y en este caso, a es un número (10) y "10" es una cadena de texto, por lo tanto, aunque ambos tienen el mismo valor numérico, no son del mismo tipo de dato, por lo que la comparación devuelve true. En cambio, el operador de desigualdad (!=) solo compara el valor, sin importar el tipo de dato, por lo que en este caso devuelve false, porque ambos tienen el mismo valor numérico (10).

//usar preferiblemente ( === ) y ( !== ) para evitar errores de comparación, ya que estos operadores comparan tanto el valor como el tipo de dato, lo que ayuda a evitar errores de comparación debido a la coerción de tipos en JavaScript.
