//cuales son los números pares

let i = 2; 
//en while se ejecuta primero la condición y luego la porción restante del código

/*while(i < 2) {
    if (i % 2 == 0){
        console.log("Numero par", i);
    }
    i++;
}   */


do {
        if (i % 2 == 0){
        console.log("Numero par", i);
    }
    i++;

} while (i < 2); 

//en do while se ejecuta primero la porción de código y de ultimas la condición (i < 2)
//si la condición se cumple, después vuelve a subir y a ejecutar el código 