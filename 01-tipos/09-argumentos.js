// parametros (a) es un parametro dentro de la función:
function suma(a, b){
    console.log(arguments)
    return a+b;
}


//Ahora cuando llamamos a la función le pasamos un argumento (5) es un argumento que se le pasa a la función, y este argumento se asigna al parametro (a) dentro de la función, es decir, cuando llamamos a la función suma(5), el valor 5 se asigna al parametro a dentro de la función, y luego se ejecuta el código dentro de la función, que en este caso es return a+2, lo que devuelve el resultado de sumar 2 al valor de a, que en este caso es 5, por lo tanto, el resultado de la función suma(5) es 7.
//let resultado = suma(5);
//console.log(resultado); 


//le vamos a pasar más parametros a la función: 
//let resultado = suma(5, 6);
//console.log(resultado);
/* aqui no veriamos el resultado, xq solo estoy referenciando a = 5, y el segundo parametro
no se esta utilizando dentro de la función, por lo tanto, el resultado de la función sigue 
siendo 7, aunque le estemos pasando un segundo argumento, esto es porque la función solo 
esta utilizando el primer parametro (a) y el segundo parametro no se esta utilizando dentro 
de la función, por lo tanto, el resultado de la función sigue siendo 7, aunque le estemos 
pasando un segundo argumento. */

let resultado = suma(5, 6, 7, 8, 9);// aqui le pasé más argumentos a la funcion 
console.log(typeof suma);
