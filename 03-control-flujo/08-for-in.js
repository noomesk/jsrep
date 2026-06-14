let user = {
    id: 101100010,
    name: "Paquito",
    age: 25,
};

for (let prop in user){ //prop es propiedad, en codigo de otros se puede leer asi
    //luego la palabra reservada de "in" y alado hay que indicarle el objeto al cual le quiero iterar sus propiedades
    console.log(prop, user[prop]);
}

let animals = ["gatito", "perrito", "serpiente"];
for (let indice in animals) {
    console.log(indice, animals[indice]); 
}