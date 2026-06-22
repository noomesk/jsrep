/**
 * EJERCICIO 2
 * Nombre: ancho x alto 
 * 8K 7680 x 4320
 * 4K 3840 x 2160
 * WQHD 2560 x 1440
 * FHD 1920 x 1080 
 * HD 1280  x 720
 */

//esta función lo que hará será devolvernos el nombre de la resolución, dependiendo de los valores 
//que nosotros le pasemos como parametro (ancho, alto
/* si la resolución es menor que HD (1280 x 720) entonces la función debe devolver el valor de 
falso.
Algo importante, para devolver el nombre de la resolución (es decir: 8K, 4K, WQHD, FH o HD, es que
ancho sea mayor que el ancho de la resolución (c/u tiene valores diferentes), que alto
también tiene que ser mayor al alto de esa resolución*/

function nombreResolucion(ancho, alto) {
    if (ancho >= 7680 && alto >= 4320) {
        return "8K";
    } else if (ancho >= 3840 && alto >= 2160) {
        return "4K";
    } else if (ancho >= 2560 && alto >= 1440) {
        return "WQHD";
    } else if (ancho >= 1920 && alto >= 1080) {
        return "FHD";
    } else if (ancho >= 1280 && alto >= 720) {
        return "HD";
    } else {
        return false;  
    }

}

let nombre = nombreResolucion(3500, 5068);
console.log(nombre); 

// todo estaba bien, excepto algunas cosillas de indentación... sangria recordalo ché!!}
//reviisar if
