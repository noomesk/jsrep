//Personaje de TV
let nombre = "Tanjiro";
let anime = "Kimetsu no Yaiba";
let edad = 16;

//aqui es donde entran los objetos, un objeto es una colección de propiedades, y cada propiedad tiene un nombre y un valor, y el valor puede ser de cualquier tipo de dato, incluyendo otros objetos, lo que nos permite crear estructuras de datos complejas y organizadas, y además, nos permite agrupar información relacionada en un solo lugar, lo que hace que nuestro código sea más fácil de entender y mantener.
//para crear un objeto, utilizamos las llaves {}, y dentro de las llaves, definimos las propiedades del objeto, cada propiedad se define con un nombre seguido de dos puntos :, y luego el valor de la propiedad, y cada propiedad se separa por una coma , para indicar que son propiedades diferentes, y así sucesivamente hasta definir todas las propiedades que queremos que tenga nuestro objeto.
let personaje = {
    nombre: "Tanjiro",
    anime: "Kimetsu no Yaiba",
    edad: 16,
};
console.log(personaje); 
console.log(personaje.nombre); // para acceder a una propiedad de un objeto, utilizamos el nombre del objeto seguido de un punto . y luego el nombre de la propiedad a la que queremos acceder, y así obtenemos el valor de esa propiedad, en este caso, el valor de la propiedad nombre del objeto personaje es "Tanjiro", por lo que al ejecutar console.log(personaje.nombre) se mostrará "Tanjiro" en la consola.
console.log(personaje["anime"]); // también podemos acceder a una propiedad de un objeto utilizando la notación de corchetes [], y dentro de los corchetes, colocamos el nombre de la propiedad entre comillas, y así obtenemos el valor de esa propiedad, en este caso, el valor de la propiedad anime del objeto personaje es "Kimetsu no Yaiba", por lo que al ejecutar console.log(personaje["anime"]) se mostrará "Kimetsu no Yaiba" en la consola.


personaje.edad = 17; // también podemos modificar el valor de una propiedad de un objeto, utilizando la notación de punto o la notación de corchetes, y asignando un nuevo valor a esa propiedad, en este caso, estamos modificando el valor de la propiedad edad del objeto personaje, y le estamos asignando el valor 17, por lo que al ejecutar console.log(personaje) se mostrará el objeto personaje con la propiedad edad modificada a 17.
console.log(personaje);

personaje["anime"] = "Demon Slayer"; // también podemos modificar el valor de una propiedad de un objeto utilizando la notación de corchetes, y asignando un nuevo valor a esa propiedad, en este caso, estamos modificando el valor de la propiedad anime del objeto personaje, y le estamos asignando el valor "Demon Slayer", por lo que al ejecutar console.log(personaje) se mostrará el objeto personaje con la propiedad anime modificada a "Demon Slayer".
console.log(personaje);

let llave = "edad";
personaje[llave] = 18; // también podemos modificar el valor de una propiedad de un objeto utilizando una variable como llave, y asignando un nuevo valor a esa propiedad, en este caso, estamos modificando el valor de la propiedad edad del objeto personaje, y le estamos asignando el valor 18, por lo que al ejecutar console.log(personaje) se mostrará el objeto personaje con la propiedad edad modificada a 18

delete personaje.edad; // también podemos eliminar una propiedad de un objeto utilizando la palabra reservada delete, seguida del nombre del objeto, un punto, y el nombre de la propiedad que queremos eliminar, en este caso, estamos eliminando la propiedad edad del objeto personaje, por lo que al ejecutar console.log(personaje) se mostrará el objeto personaje sin la propiedad edad.
console.log(personaje);