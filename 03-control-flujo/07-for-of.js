//while
//do while
//for

let animals = ["gatito", "perrito", "serpiente"];

for (let animal of animals) {
    console.log(animal);
}

//otra forma de hacerlo, digamos más manual con while: 
let i = 0; 
while (i < animals.length) {
    console.log(animals[i]);
    i++;
}