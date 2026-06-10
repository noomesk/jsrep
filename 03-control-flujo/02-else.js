let edad = 25;

if(edad  > 18) {
    console.log("Usuario mayor de edad"); 
} else if(edad > 16){
    console.log("Usuario necesita estar acompañado de un adulto");
} else{
    console.log("No puede ingresar");
}

/* Las evaluaciones se van a realizar de arriba hacia abajo, y la primera condición que se cumpla
es la q se va a ejecutar y el resto van a ser ignoradas, Z.B. si coloco edad = 28, se ejecuta 
la primera condición: Usuario mayor de edad y las otras dos son ignoradas, ahora si coloco edad = 17
se va a ejecutar la segunda linea y el resto van a ser ignoradas y si el uauario tiene 12 años,
todas las primeras lineas de código van a ser ignoradas y se ejecuta la tercera condición*/