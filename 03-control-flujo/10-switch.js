let accion = "listar"; // para ejecutar el primer default, cambiar la acción de listar por "actualizar"
let fruta = "manzana";
switch (accion) {
    case "listar":
        console.log("Acción de listar");
        break; //siempre que yo redacto un case debo colocar el break
    case "guardar":
        console.log("Acción de guardar");
        break;
    default:
        console.log("Acción no reconocida");
}

//solo omito un break si quiero un comportamiento de fall-through, Z.B:
let dia = "sábado";

switch (dia) {
  case "sábado":
  case "domingo":
    console.log("Fin de semana");
    break;
  default:
    console.log("Día entre semana");
}
//Aquí no hay break entre "sábado" y "domingo" porque quiero q ambos impriman lo mismo.

//z.b. for bbs:


switch (fruta) {
  case "manzana":
    console.log("Es una manzana");
    break;
  case "plátano":
    console.log("Es un plátano");
    break;
  case "pera":
    console.log("Es una pera");
    break;
  default:
    console.log("No sé esa fruta");
}