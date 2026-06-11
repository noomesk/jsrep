// Lógica: Para poder imprimir hasta 10. ¿Cuáles son los números pares?

let i = 0;
while(i < 10){
    if(i % 2 == 0){ //si le sacamos el modulo a i en base a 2 y da 0, significa que estamos trabajando con un # par
        console.log("Número par", i);
    }
    
    i++; //esta condición siempre debe ir fuera de los if, ya que si por alguna razon esta cond no se cumpliera, entrariamos en un buble infinito

}
       
console.log("Fuera del while"); 

//es una función iterativa y cuando la condición ya no se cumple se roompe el loop!