//pido datos por prompt 
let categoria = parseInt(prompt("Ingresa categoria (1, 2 o 3) para salarios de usd 1000, usd 1500 y usd 2000"));
let subcategoria = prompt("elija la subcategoria (A , B o C para multiplicadores de 1.5, 2 y 2.5");

let sueldo
// Asigno sueldo segun la categoria
if (categoria == 1) {
    sueldo = 1000;
}
else if (categoria == 2) {
    sueldo = 1500;
}
else if (categoria == 3) {
    sueldo = 2000;
}

// Multiplicador de a acuerdo a ala subcategoria
switch (subcategoria) {

    case "A":
    sueldo = sueldo * 1.5;
    break;

    case "B":
        sueldo = sueldo * 2;
        break;

    case "C":
        sueldo = sueldo * 2.5;
        break;

    default:
        sueldo = 0;
        break;

    }

    if (sueldo >= 1500 && sueldo <=3000) {
        alert (`El sueldo de $${suelda} es de rango inicial`);
    }
    else if (sueldo > 3000) && (sueldo <= 4000) {
        alert (`El sueldo de $${sueldo} es de rango intermedio`);
    }
    else if (sueldo > 4000) {
        alert (`El sueldo de $${suelda} es de rango avanzado`);
    }


        

