/*let i = 2;
while (i < 2) {
    if (i % 2 == 0){
        console.log("Numero par ", i);
    }
    i++; 
}  */

for (let i = 2; i < 10; i++) {
    if (i % 2 == 0) {
        console.log("Numero par", i); 
    }
}


/* tambn es un loop, la diferencia con while es q se compone de 3 condiciones:
- inicialización: let i = 2; ->inicilializar una variable 
-comparación: i < 10; comparar esa variable con algo, si se cumple ejecutamos el código
-terminar iteración: i++; aqui indicamos qué es lo que hacemmos con esta variable para salir del loop
ejemplo: si sumamos +1 (i++;), se sumara +1 al valor hasta llegar a 10 y como 10 no es menor que 10
se imcumple la condición y se sale del loop (xq la iteración deja de repetirse) */