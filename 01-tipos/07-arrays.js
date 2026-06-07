// let animales = []; // podemos crear un array literal vacio
let numeros = [1, 2, 3, 4, 5]; // podemos crear un array literal con elementos dentro
console.log(numeros);
console.log(numeros[0]); // para acceder a un elemento del array, utilizamos el indice del elemento, que comienza en 0, es decir, el primer elemento del array tiene un indice de 0, el segundo elemento tiene un indice de 1, y así sucesivamente, por lo tanto, para acceder al primer elemento del array numeros, utilizamos numeros[0], para acceder al segundo elemento utilizamos numeros[1], y así sucesivamente.

numeros[5] = 6; //para agregar un nuevo elemento al array 
console.log(numeros); 

//add array vacio "empty"
numeros[10] = 11; // si agregamos un nuevo elemento en un indice que no existe, se crean elementos vacios entre el ultimo elemento del array y el nuevo elemento, es decir, si agregamos un nuevo elemento en el indice 10, se crean elementos vacios en los indices 6, 7, 8 y 9, y el nuevo elemento se agrega en el indice 10.
console.log(numeros);

//tipo de dato array
console.log(typeof numeros);  

//para ver la cantidad de elementos que tengo en este arrray uso la propiedad length
console.log(numeros.length);

