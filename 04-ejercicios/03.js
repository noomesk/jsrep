/** 
 * Consatruir una funciòn que me permita obtener un elemento por su ìndice. Nosotros vamos a tener que pasarle el array
 * y tambièn vamos a tener que pasarle el ìndice (viene con un pequeño truco): El valor que nosotros le pasemos como ìndice, no puede ser 
 * menor que cero y el elemento tiene que existir en el array. En el caso de que le pase màs me tiene que indicar que el ìndice no
 * es vàlido 
 */

function getbyIdx(arr, idx) {
    if (idx < 0 || idx >= arr.length) {
        return "indice no vàlido";  
    }// else {   -> el profe no coloca el else, sino solo un return después, xq cuando haces un return, la función termina y ya no necesitas el else. 
        return arr[idx];   // Se suele llamar early return ("retorno temprano").
    //}

}

let resultado = getbyIdx([1, 2], 0);
console.log(resultado);

//revisar array