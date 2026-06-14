let i = 0; 
while (i < 6) { 
    i++;
    if (i === 2) {
        continue;  // al ejecutarse se salta al inicio del while y no ejecuta el console.log cuando se cumple la condición de i===2. 
    } 
        if (i === 4) {
        break; //rompe el ciclo cuando i = 4
    }
    console.log(i);
}