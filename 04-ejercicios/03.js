/** 
 * Consatruir una funciòn que me permita obtener un elemento por su ìndice. Nosotros vamos a tener que pasarle el array
 * y tambièn vamos a tener que pasarle el ìndice (viene con un pequeño truco): El valor que nosotros le pasemos como ìndice, no puede ser 
 * menor que cero y el elemento tiene que existir en el array. En el caso de que le pase màs me tiene que indicar que el ìndice no
 * es vàlido 
 */

function getbyIdx(arr, idx) {
    if (idx >= arr.length) {
        return arr[idx]; 
    } else if (idx > arr.length) {
        return "indice no vàlido"; 
    } else {
        return arr[idx];  
    }

}

let resultado = getbyIdx([1, 2], 1);
console.log(resultado);

//revisar array